import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-[#0d0c22]">
      <div>
        <h1 className="text-white text-[3rem]">People Manifest</h1>
      </div>
    </div>
  );
}

export default App;
