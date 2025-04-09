import { use, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  const addValue = () => {
    setCount(count + 1);
  };

  const subCount = () => {
    setCount(count - 1);
  };

  function reset() {
    setCount(0);
  }

  return (
    <>
      <h1>React with Chai Aur code</h1>
      <h2>Counter value : {count}</h2>

      <button onClick={addValue}>add value</button>

      <button onClick={subCount}>remove value</button>

      <button onClick={reset}>Reset</button>
    </>
  );
}

export default App;
