import { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter() {
  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount((c) => c + 1);
  };

  const handleDec = () => {
    setCount((c) => c - 1);
  };

  const handleRes = () => {
    setCount(0);
  };

  const buttonStyle = {
    padding: "5px",
    backgroundColor: "black",
    color: "white",
  };

  return (
    <>
      <CounterDisplay count={count} />
      <div>
        <button onClick={handleInc}>+</button>
        <button onClick={handleDec}>-</button>
        <button onClick={handleRes}>Reset</button>
      </div>
    </>
  );
}
