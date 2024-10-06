import { useState } from "react";
import {
  fetchAll,
  fetchById,
  fetchCreated,
  fetchDeleted,
  fetchUpdated,
} from "./fetchDatas";
// change font
// add bg to selected tab
// add note to log : "updated" / "deleted" / "created"

function App() {
  const [renderData, setRenderData] = useState([]);
  const [formType, setFormType] = useState("getAll");
  const [formData, setFormData] = useState({
    id: "",
    firstname: "",
    city: "",
    age: "",
    gender: "",
  });

  const formTypes = {
    getAll: [],
    getById: [{ name: "ID", type: "string" }],
    create: [
      { name: "First Name", type: "string" },
      { name: "City", type: "string" },
      { name: "Age", type: "string" },
      { name: "Gender", type: "string" },
    ],
    update: [
      { name: "ID", type: "string" },
      { name: "First Name", type: "string" },
      { name: "City", type: "string" },
      { name: "Age", type: "string" },
      { name: "Gender", type: "string" },
    ],
    delete: [{ name: "ID", type: "string" }],
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "age") {
      const numericValue = value.replace(/[^0-9]/g, "");
      setFormData({ ...formData, [name]: numericValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const getAll = async () => {
    setFormType("getAll");
    const res = await fetchAll();
    const FetchedData = await res.json();
    setRenderData(FetchedData);
  };

  const submitForm = async () => {
    if (formType === "getById") {
      const { id } = formData;
      const res = await fetchById(id);
      const FetchedData = await res.json();
      setRenderData(FetchedData);
    }

    if (formType === "create") {
      const { firstname, city, age, gender } = formData;
      const res = await fetchCreated({ firstname, city, age, gender });
      const FetchedData = await res.json();
      setRenderData([FetchedData]);
    }

    if (formType === "update") {
      const { id, firstname, city, age, gender } = formData;
      const res = await fetchUpdated({ id, firstname, city, age, gender });
      const FetchedData = await res.json();
      setRenderData([FetchedData]);
    }

    if (formType === "delete") {
      const { id } = formData;
      // console.log(id);
      const res = await fetchDeleted(id);
      const FetchedData = await res.json();
      setRenderData([FetchedData]);
    }
  };

  // useEffect(() => {
  //   // console.log(renderData);
  // }, [renderData]);

  return (
    <div className="text-white flex flex-col items-center min-h-screen w-full bg-[#0B192C]">
      <div className="border rounded-xl bg-[#0d0c22] w-[90%] p-10 mt-4">
        <div className="text-center ">
          <h1 className=" text-[3rem]">People Manifest</h1>
        </div>
        <div className="flex flex-grow gap-10 mt-10">
          <div className="border rounded-xl grow pt-4 pb-10">
            <div className="flex flex-col items-center">
              <h2 className="text-3xl mb-4">Data Logger</h2>
            </div>
            <div className="flex justify-center gap-12 pt-4 pb-10">
              <button
                onClick={() => getAll()}
                className={`text-2xl py-1 px-6 rounded-full  ${
                  formType === "getAll" ? "bg-[#626F47]" : "hover:bg-[#0B192C]"
                }`}
              >
                Get All
              </button>
              <button
                onClick={() => setFormType("getById")}
                className={`text-2xl py-1 px-6 rounded-full ${
                  formType === "getById" ? "bg-[#626F47]" : "hover:bg-[#0B192C]"
                }`}
              >
                Get By ID
              </button>
              <button
                onClick={() => setFormType("create")}
                className={`text-2xl py-1 px-6 rounded-full ${
                  formType === "create" ? "bg-[#626F47]" : "hover:bg-[#0B192C]"
                }`}
              >
                Create Person
              </button>
              <button
                onClick={() => setFormType("update")}
                className={`text-2xl py-1 px-6 rounded-full ${
                  formType === "update" ? "bg-[#626F47]" : "hover:bg-[#0B192C]"
                }`}
              >
                Update Person
              </button>
              <button
                onClick={() => setFormType("delete")}
                className={`text-2xl py-1 px-6 rounded-full ${
                  formType === "delete" ? "bg-[#626F47]" : "hover:bg-[#0B192C]"
                }`}
              >
                Delete Person
              </button>
            </div>

            <div className="flex justify-center ">
              <div className="p-10 bg-[#0B192C] rounded-lg">
                <div className="gap-32  flex justify-center">
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
                    <form action="" className="flex flex-col gap-5">
                      {formTypes[formType]?.map((field) => (
                        <div key={field.name}>
                          <input
                            className="px-4 w-96 bg-[#3a364a] rounded-md"
                            type={field.type}
                            name={field.name.toLowerCase().replace(" ", "")}
                            value={
                              formData[
                                field.name.toLowerCase().replace(" ", "")
                              ]
                            }
                            onChange={handleInputChange}
                          />
                        </div>
                      ))}
                    </form>
                  </div>
                </div>
                <div className="mt-8 flex justify-center gap-8">
                  {formTypes[formType][0] && (
                    <button
                      onClick={submitForm}
                      className="bg-[#3a364a] px-10 text-xl rounded-lg py-2"
                    >
                      Submit
                    </button>
                  )}
                  <button
                    onClick={() => setRenderData([])}
                    className="bg-[#3a364a] px-10 text-xl rounded-lg py-2"
                  >
                    Clear Table
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border my-8 rounded-xl grow py-4">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl">Log</h2>
          </div>
          <div className="flex">
            <table className=" w-full mx-4 text-xl">
              <thead>
                <tr className="h-12">
                  <td></td>
                  <th className="">ID</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>City</th>
                </tr>
              </thead>
              <tbody>
                {renderData.map((obj, i) => (
                  <tr key={obj._id} className="h-8 ">
                    <td className="text-center">{i + 1}</td>
                    <td className="text-center">{obj._id}</td>
                    <td className="text-center">{obj.name}</td>
                    <td className="text-center">{obj.city}</td>
                    <td className="text-center">{obj.gender}</td>
                    <td className="text-center">{obj.age}</td>
                    <td></td>
                  </tr>
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
