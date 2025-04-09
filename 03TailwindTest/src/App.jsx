import React from "react";
import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">
        Hello, Tailwind + Vite!
      </h1>
      <Card name="Rajan" />
      <Card name="wildCard" />
      <Card />
      <Card />
      <Card />
    </>
  );
}

export default App;
