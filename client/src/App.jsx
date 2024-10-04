import { useState } from "react";
import { fetchAll } from "./fetchDatas";

function App() {
  const [formType, setFormType] = useState("getAll");
  const [formData, setFormData] = useState({
    id: "",
    firstName: "",
    city: "",
    age: "",
    gender: "",
  });

  const mock = [
    { id: 456456, name: "gdsfg", city: "dsfgds", age: 56, gender: "ddfg" },
    { id: 456456, name: "gdsfg", city: "dsfgds", age: 56, gender: "ddfg" },
    { id: 456456, name: "gdsfg", city: "dsfgds", age: 56, gender: "ddfg" },
    { id: 456456, name: "gdsfg", city: "dsfgds", age: 56, gender: "ddfg" },
    { id: 456456, name: "gdsfg", city: "dsfgds", age: 56, gender: "ddfg" },
    { id: 456456, name: "gdsfg", city: "dsfgds", age: 56, gender: "ddfg" },
    { id: 456456, name: "gdsfg", city: "dsfgds", age: 56, gender: "ddfg" },
    { id: 456456, name: "gdsfg", city: "dsfgds", age: 56, gender: "ddfg" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const getAll = async () => {
    console.log("get all");
    const res = await fetchAll();
    const data = await res.json();
    console.log(data);
  };

  const formTypes = {
    getById: ["ID"],
    create: ["First Name", "City", "Age", "Gender"],
    update: ["ID", "First Name", "City", "Age", "Gender"],
    delete: ["ID"],
  };

  return (
    <div className="text-white flex flex-col items-center min-h-screen w-full bg-[#0B192C]">
      <div className="border rounded-xl bg-[#0d0c22] w-[90%] p-10 mt-4">
        <div className="text-center ">
          <h1 className=" text-[3rem]">People Manifest</h1>
        </div>
        <div className="flex flex-grow gap-10 mt-10">
          <div className="border rounded-xl grow py-4">
            <div className="flex flex-col items-center">
              <h2 className="text-3xl mb-4">Data Logger</h2>
            </div>
            <div className="flex justify-center gap-12 pt-4 pb-10">
              <button
                onClick={getAll}
                className="text-2xl py-1 px-6 rounded-full hover:bg-[#0B192C]"
              >
                Get All
              </button>
              <button
                onClick={() => setFormType("getById")}
                className="text-2xl py-1 px-6 rounded-full hover:bg-[#0B192C]"
              >
                Get By ID
              </button>
              <button
                onClick={() => setFormType("create")}
                className="text-2xl py-1 px-6 rounded-full hover:bg-[#0B192C]"
              >
                Create Person
              </button>
              <button
                onClick={() => setFormType("update")}
                className="text-2xl py-1 px-6 rounded-full  hover:bg-[#0B192C]"
              >
                Update Person
              </button>
              <button
                onClick={() => setFormType("delete")}
                className="text-2xl py-1 px-6 rounded-full hover:bg-[#0B192C]"
              >
                Delete Person
              </button>
            </div>

            {/* Form based on the selected type */}
            <div className="flex justify-around">
              <div className="text-2xl">
                <div className="flex flex-col gap-5">
                  {formTypes[formType]?.map((field) => (
                    <div key={field}>
                      <span>{field}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-2xl">
                <form action="" className="flex flex-col gap-5">
                  {formTypes[formType]?.map((field) => (
                    <div key={field}>
                      <input
                        className="px-4 bg-[#3a364a] rounded-md"
                        type="text"
                        name={field.toLowerCase().replace(" ", "")}
                        value={formData[field.toLowerCase().replace(" ", "")]}
                        onChange={handleInputChange}
                      />
                    </div>
                  ))}
                </form>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <button className="bg-[#3a364a] px-6 text-xl rounded-lg py-2">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="border my-8 rounded-xl grow py-4">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl">Log</h2>
          </div>
          <div className="flex">
            <table className=" w-full mx-4 text-xl">
              <tr className="h-12">
                <th></th>
                <th className="">ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>City</th>
              </tr>
              {mock.map((obj, i) => (
                <tr className="h-8">
                  <th>{i + 1}</th>
                  <th>{obj.id}</th>
                  <th>{obj.name}</th>
                  <th>{obj.city}</th>
                  <th>{obj.gender}</th>
                  <th>{obj.age}</th>
                  <td></td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
