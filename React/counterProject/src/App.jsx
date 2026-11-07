import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);
  const Add = () => {
    count = count + 1;
    console.log("Clicked", count);
    setCount(count);
  };
  const Remove = () => {
    if (count > 0) {
      count = count - 1;
      console.log("Clicked", count);
      setCount(count);
    } else {
      alert("Counter is 0");
    }
  };

  /*
  This wont update the value in UI hence we use HOOKs(Use State)
  let count = 0;

  const Add = () => {
    count = count + 1;
    console.log("Clicked", count);
  };
*/
  return (
    <>
      <h1>Counter Project </h1>
      <h2>Counter Value :{count}</h2>
      <button onClick={Add}>Add Value {count}</button> <br />
      <button onClick={Remove}>Remove Value {count}</button>
    </>
  );
}

export default App;
