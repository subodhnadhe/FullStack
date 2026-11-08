import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("#082e5b");
  console.log(color);

  return (
    <>
      <div
        className="w-full h-full duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="text-center text-white">
          <h1 className="text-5xl p-3">Background Changer </h1>
          <p className="p-2">Click on buttons below to change the color</p>
        </div>
      </div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-black px-3 py-2 rounded-3xl">
          <button
            onClick={() => {
              setColor("red");
            }}
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Red" }}
          >
            Red
          </button>
          <button
            onClick={() => {
              setColor("Grey");
            }}
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Grey" }}
          >
            Grey
          </button>
          <button
            onClick={() => {
              setColor("green");
            }}
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Green" }}
          >
            Green
          </button>
          <button
            onClick={() => {
              setColor("orange");
            }}
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Orange" }}
          >
            Orange
          </button>
          <button
            onClick={() => {
              setColor("purple");
            }}
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Purple" }}
          >
            Purple
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
