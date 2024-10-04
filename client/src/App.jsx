import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-white flex flex-col items-center min-h-screen w-full bg-[#0d0c22]">
      <div className="border w-[90%] p-10 mt-4">
        <div className="text-center ">
          <h1 className=" text-[3rem]">People Manifest</h1>
        </div>
        <div className="flex flex-grow gap-10 mt-10">
          <div className="border grow py-4">
            <div className="flex flex-col items-center">
              <h2 className="text-3xl mb-4">Data Logger</h2>
            </div>
            <div className="flex justify-around">
              <div className="text-2xl">
                <form action="" className="flex flex-col gap-5">
                  <div>
                    <span>First Name</span>
                    {/* <input type="text" /> */}
                  </div>
                  <div>
                    <span>City</span>
                    {/* <input type="text" /> */}
                  </div>
                  <div>
                    <span>Age</span>
                    {/* <input type="text" /> */}
                  </div>
                  <div>
                    <span>Gender</span>
                    {/* <input type="text" /> */}
                  </div>
                </form>
              </div>
              <div className="text-2xl">
                <form action="" className="flex flex-col gap-5">
                  <div>
                    {/* <span>First Name</span> */}
                    <input type="text" />
                  </div>
                  <div>
                    {/* <span>City</span> */}
                    <input type="text" />
                  </div>
                  <div>
                    {/* <span>Age</span> */}
                    <input type="text" />
                  </div>
                  <div>
                    {/* <span>Gender</span> */}
                    <input type="text" />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="border grow py-4">
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
