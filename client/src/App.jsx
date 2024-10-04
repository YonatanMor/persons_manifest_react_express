import { useState } from "react";
import "./App.css";

function App() {
  const [showById, setShowById] = useState(true);
  const [showCreate, setShowCreate] = useState(true);
  const [showUpdate, setShowUpdate] = useState(true);
  const [showErase, setShowErase] = useState(true);

  // const getAll = () => {
  //   setShowById(false);
  //   setShowCreate(false);
  //   setShowUpdate(false);
  //   setShowErase(false);
  // };

  const getById = () => {
    setShowById(true);
    setShowCreate(false);
    setShowUpdate(false);
    setShowErase(false);
  };
  
  const createPerson = () => {
    setShowById(false);
    setShowCreate(true);
    setShowUpdate(false);
    setShowErase(false);
  };

  const updateById = () => {
    setShowById(false);
    setShowCreate(false);
    setShowUpdate(true);
    setShowErase(false);
  };
  const deleteById = () => {
    setShowById(false);
    setShowCreate(false);
    setShowUpdate(false);
    setShowErase(true);
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
                // onClick={getAll}
                className="text-2xl py-1 px-6 rounded-full hover:bg-[#0B192C]"
              >
                Get All
              </button>
              <button
                onClick={getById}
                className="text-2xl py-1 px-6 rounded-full hover:bg-[#0B192C]"
              >
                Get By ID
              </button>
              <button
                onClick={createPerson}
                className="text-2xl py-1 px-6 rounded-full hover:bg-[#0B192C]"
              >
                Create Person
              </button>
              <button
                onClick={updateById}
                className="text-2xl py-1 px-6 rounded-full  hover:bg-[#0B192C]"
              >
                Update Person
              </button>
              <button onClick={deleteById} className="text-2xl py-1 px-6 rounded-full hover:bg-[#0B192C]">
                Delete Person
              </button>
            </div>
            <div className="flex justify-around">
              <div className="text-2xl">
                <div className="flex flex-col gap-5">
                  {(showById || showUpdate || showErase) && (
                    <div>
                      <span>ID</span>
                    </div>
                  )}
                  {(showCreate || showUpdate) && (
                    <div>
                      <span>First Name</span>
                    </div>
                  )}
                  {(showCreate || showUpdate) && (
                    <div>
                      <span>City</span>
                    </div>
                  )}
                  {(showCreate || showUpdate) && (
                    <div>
                      <span>Age</span>
                    </div>
                  )}
                  {(showCreate || showUpdate) && (
                    <div>
                      <span>Gender</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="text-2xl">
                <form action="" className="flex flex-col gap-5">
                  {(showById || showUpdate || showErase) && (
                    <div>
                      <input className="bg-[#3a364a] rounded-md" type="text" />
                    </div>
                  )}
                  {(showCreate || showUpdate) && (
                    <div>
                      <input className="bg-[#3a364a] rounded-md" type="text" />
                    </div>
                  )}
                  {(showCreate || showUpdate) && (
                    <div>
                      <input className="bg-[#3a364a] rounded-md" type="text" />
                    </div>
                  )}
                  {(showCreate || showUpdate) && (
                    <div>
                      <input className="bg-[#3a364a] rounded-md" type="text" />
                    </div>
                  )}
                  {(showCreate || showUpdate) && (
                    <div>
                      <input className="bg-[#3a364a] rounded-md" type="text" />
                    </div>
                  )}
                </form>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <button className="bg-[#3a364a] px-6 text-xl rounded-lg py-2">
                Submit
              </button>
            </div>
          </div>
          <div className="border rounded-xl grow py-4">
            <div className="flex flex-col items-center">
              <h2 className="text-3xl">Log</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
