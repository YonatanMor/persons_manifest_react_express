import { useRef, useState } from "react";

import { motion } from "framer-motion";
import { AiOutlineClear } from "react-icons/ai";
import { IoCloudUploadOutline } from "react-icons/io5";
import { LuSendHorizonal } from "react-icons/lu";
import { MdOutlineImagesearchRoller } from "react-icons/md";
import {
  fetchAll,
  fetchById,
  fetchCreated,
  fetchCsvFile,
  fetchDeleted,
  fetchUpdated,
} from "./fetchDatas";
// add note to log : "updated" / "deleted" / "created"
// in update tab display old data and updated data

function App() {
  const fileInputRef = useRef(null);
  const [showErrMsg, setShowErrMsg] = useState(false);
  const [showWrongIdMsg, setShowWrongIdMsg] = useState(false);
  const [formType, setFormType] = useState("getAll");
  const [tableData, setTableData] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    firstname: "",
    city: "",
    age: "",
    gender: "",
  });

  const rowVariants = {
    start: { opacity: 0 },
    finish: { opacity: 1, transition: { duration: 0.3 } },
  };

  const formTypes = {
    getAll: [],
    getById: [{ name: "ID", type: "string", require: true, maxLength: 24 }],
    create: [
      { name: "First Name", type: "string", require: true, maxLength: 14 },
      { name: "City", type: "string", require: true, maxLength: 14 },
      { name: "Age", type: "string", require: true, maxLength: 3 },
      { name: "Gender", type: "select", require: true, maxLength: 14 },
    ],
    update: [
      { name: "ID", type: "string", require: true, maxLength: 24 },
      { name: "First Name", type: "string", maxLength: 14 },
      { name: "City", type: "string", maxLength: 14 },
      { name: "Age", type: "string", maxLength: 3 },
      { name: "Gender", type: "string", maxLength: 14 },
    ],
    delete: [{ name: "ID", type: "string", require: true, maxLength: 24 }],
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target.result;
      const rows = text.split("\n").map((row) => row.split(","));
      const headers = rows[0];
      const data = rows.slice(1).map((row) => {
        const obj = {};
        row.forEach((val, index) => {
          obj[headers[index].trim()] = val.trim();
        });
        return obj;
      });
      const res = await fetchCsvFile(data);
      const fetchedData = await res.json();
      setTableData(fetchedData);
    };
    reader.readAsText(file);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShowErrMsg(false);
    setShowWrongIdMsg(false);
    if (name === "age") {
      const numericValue = value.replace(/[^0-9]/g, "");
      setFormData({ ...formData, [name]: numericValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      submitForm();
    }
  };

  const clearForm = () => {
    setFormData({
      id: "",
      firstname: "",
      city: "",
      age: "",
      gender: "",
    });
    setShowErrMsg(false);
    setShowWrongIdMsg(false);
  };

  const clearTable = () => {
    setTableData([]);
  };

  const handleTabSelection = (tabName) => {
    setShowErrMsg(false);
    setShowWrongIdMsg(false);

    if (tabName === "getAll") {
      getAll();
    }
    if (tabName === "getById") {
      setFormType("getById");
    }
    if (tabName === "create") {
      setFormData({
        id: "",
        firstname: "",
        city: "",
        age: "",
        gender: "",
      });
      setFormType("create");
    }
    if (tabName === "update") {
      setFormType("update");
    }
    if (tabName === "delete") {
      setFormType("delete");
    }
  };

  const getAll = async () => {
    setFormType("getAll");
    const res = await fetchAll();
    const fetchedData = await res.json();
    setTableData(fetchedData);
  };

  const submitForm = async () => {
    if (formType === "getById") {
      const { id } = formData;
      if (id) {
        const res = await fetchById(id);
        const fetchedData = await res.json();
        if (fetchedData[0]) {
          setTableData(fetchedData);
        } else {
          setShowWrongIdMsg(true);
        }
      } else {
        setShowErrMsg(true);
      }
    }

    if (formType === "create") {
      const { firstname, city, age, gender } = formData;
      if (firstname && city && age && gender) {
        const res = await fetchCreated({ firstname, city, age, gender });
        const fetchedData = await res.json();
        setTableData([fetchedData]);
      } else {
        setShowErrMsg(true);
      }
    }

    if (formType === "update") {
      const { id, firstname, city, age, gender } = formData;
      if (id) {
        const res = await fetchUpdated({ id, firstname, city, age, gender });
        const fetchedData = await res.json();
        if (fetchedData) {
          setTableData([fetchedData]);
        } else {
          setShowWrongIdMsg(true);
        }
      } else {
        setShowErrMsg(true);
      }
    }

    if (formType === "delete") {
      const { id } = formData;
      if (id) {
        const res = await fetchDeleted(id);
        const fetchedData = await res.json();
        if (fetchedData) {
          setTableData([fetchedData]);
        } else {
          setShowWrongIdMsg(true);
        }
      } else {
        setShowErrMsg(true);
      }
    }
  };

  const handleRowClick = (person) => {
    setFormType("update");
    setFormData({
      id: person._id,
      firstname: person.name,
      city: person.city,
      age: person.age,
      gender: person.gender,
    });
  };

  return (
    <div className="text-white flex flex-col items-center font-Poppins font-extralight ">
      <motion.div
        animate={{
          rotate: 360,
          transition: {
            duration: 600,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        className="fixed -inset-[60vh] bg-cover bg-center -z-10 bg-[url('https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]"
      ></motion.div>
      <div className="border relative rounded-xl bg-[#0d0c22e0]  select-none w-[90%] p-10 my-12">
        <motion.div
          onClick={() => fileInputRef.current.click()}
          whileHover={{
            boxShadow: "0px 0px 8px #a9d4de",
          }}
          whileTap={{ backgroundColor: "#E4E0E1" }}
          className="absolute rounded-full top-4 left-4 p-2"
        >
          <input
            ref={fileInputRef}
            onChange={handleFileChange}
            type="file"
            className="hidden"
          ></input>
          <IoCloudUploadOutline size={36} />
        </motion.div>
        <div className="text-center">
          <h1 className=" text-[3rem] font-Playwrite">
            People Manifest Manager
          </h1>
        </div>
        <div className="mt-10">
          <div className="rounded-xl grow pt-4 pb-10">
            <div className="flex justify-center gap-12 pt-4 pb-10">
              <motion.button
                className={`text-2xl py-1 px-6 rounded-full 
                  ${formType === "getAll" ? "bg-[#088395]" : ""}
                  `}
                whileHover={{
                  backgroundColor: "#a9d4de",
                  textShadow: "0px 0px 8px #ffffff",
                  boxShadow: "0px 0px 8px #a9d4de",
                }}
                onClick={() => handleTabSelection("getAll")}
              >
                Get All
              </motion.button>
              <motion.button
                whileHover={{
                  backgroundColor: "#a9d4de",
                  textShadow: "0px 0px 8px #ffffff",
                  boxShadow: "0px 0px 8px #a9d4de",
                }}
                onClick={() => handleTabSelection("getById")}
                className={`text-2xl py-1 px-6 rounded-full ${
                  formType === "getById" ? "bg-[#088395]" : ""
                }`}
              >
                Get By ID
              </motion.button>
              <button
                onClick={() => handleTabSelection("create")}
                className={`text-2xl py-1 px-6 rounded-full ${
                  formType === "create"
                    ? "bg-[#088395]"
                    : "hover:bg-[#a9d4de] hover:text-black"
                }`}
              >
                Create Person
              </button>
              <button
                onClick={() => handleTabSelection("update")}
                className={`text-2xl py-1 px-6 rounded-full ${
                  formType === "update"
                    ? "bg-[#088395]"
                    : "hover:bg-[#a9d4de] hover:text-black"
                }`}
              >
                Update Person
              </button>
              <button
                onClick={() => handleTabSelection("delete")}
                className={`text-2xl py-1 px-6 rounded-full ${
                  formType === "delete"
                    ? "bg-[#088395]"
                    : "hover:bg-[#a9d4de] hover:text-black"
                }`}
              >
                Delete Person
              </button>
            </div>

            <div className="flex justify-center">
              {formTypes[formType][0] && (
                <div className="p-16 bg-[#0B192C] w-[884px] rounded-lg relative">
                  {showWrongIdMsg && (
                    <div className="absolute top-4 left-0 text-center w-full text-xl text-red-500">
                      ID does not exist
                    </div>
                  )}
                  <div
                    className={`gap-32 flex justify-center ${
                      formTypes[formType][0] ? "mb-8" : ""
                    }`}
                  >
                    <div className="text-2xl">
                      <div className="flex flex-col gap-5">
                        {formTypes[formType]?.map((field) => (
                          <div key={field.name}>
                            <span>{field.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="text-2xl">
                      <form
                        onKeyDown={handleKeyDown}
                        className="flex flex-col gap-5"
                      >
                        {formTypes[formType]?.map((field) => (
                          <div className="relative" key={field.name}>
                            <input
                              className="px-4 w-96 bg-[#3a364a] rounded-md"
                              type={field.type}
                              name={field.name.toLowerCase().replace(" ", "")}
                              placeholder={field.placeholder}
                              maxLength={field.maxLength}
                              value={
                                formData[
                                  field.name.toLowerCase().replace(" ", "")
                                ]
                              }
                              onChange={handleInputChange}
                            />
                            {field.require && showErrMsg && (
                              <div className="absolute top-[1px] -left-24 text-lg text-red-500 pointer-events-none">
                                Required
                              </div>
                            )}
                          </div>
                        ))}
                      </form>
                    </div>
                  </div>
                  <div className="flex justify-center gap-8">
                    <>
                      <motion.button
                        whileHover={{
                          boxShadow: "0px 0px 9px #a9d4de",
                        }}
                        whileTap={{ backgroundColor: "#E4E0E1" }}
                        onClick={clearForm}
                        className="absolute  top-2 right-2 rounded-full m-3 p-2 flex justify-center items-center "
                      >
                        <AiOutlineClear size={32} />
                      </motion.button>
                      <motion.button
                        whileHover={{
                          // textShadow: "0px 0px 8px #ffffff",
                          boxShadow: "0px 0px 8px #a9d4de",
                        }}
                        onClick={submitForm}
                        className="bg-[#347928] active:bg-[#34792888] text-[1.35rem] px-10 text-xl rounded-lg py-2 flex justify-center items-center gap-3"
                      >
                        Submit
                        <LuSendHorizonal size={22} />
                      </motion.button>
                    </>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="border my-8 rounded-xl grow py-4">
          <div className="relative flex justify-center items-center">
            <h2 className="text-3xl mb-6">Log</h2>

            <motion.div
              whileHover={{
                boxShadow: "0px 0px 8px #a9d4de",
              }}
              whileTap={{ backgroundColor: "#E4E0E1" }}
              onClick={clearTable}
              className="absolute select-none left-3 p-2 cursor-pointer rounded-full flex justify-center"
            >
              <MdOutlineImagesearchRoller size={32} />
            </motion.div>
          </div>
          <div className="flex">
            <table
              className="w-full mx-4 text-xl"
              style={{ tableLayout: "fixed" }}
            >
              <thead>
                <tr className="h-12">
                  <th className="w-16"></th>
                  <th className="font-Poppins font-extralight w-80">ID</th>
                  <th className="font-Poppins font-extralight">Name</th>
                  <th className="font-Poppins font-extralight w-20">Age</th>
                  <th className="font-Poppins font-extralight">Gender</th>
                  <th className="font-Poppins font-extralight">City</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((obj, i) => (
                  <motion.tr
                    whileTap={{ scale: 1.01 }}
                    variants={rowVariants}
                    initial="start"
                    animate="finish"
                    onClick={() => handleRowClick(obj)}
                    key={obj._id}
                    className={`text-[#FAF7F0] cursor-pointer hover:text-[#FFB200] h-10 ${
                      i % 2 === 0 ? "bg-[#1E3E62]" : "bg-[#0B192C]"
                    }`}
                  >
                    <motion.td className="text-center">{i + 1}</motion.td>
                    <motion.td className="text-center">{obj._id}</motion.td>
                    <motion.td className="text-center">{obj.name}</motion.td>
                    <motion.td className="text-center">{obj.age}</motion.td>
                    <motion.td className="text-center">{obj.gender}</motion.td>
                    <motion.td className="text-center">{obj.city}</motion.td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
