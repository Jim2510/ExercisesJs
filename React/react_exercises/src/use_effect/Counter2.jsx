import { useEffect, useState } from "react";
import { CounterDisplay2 } from "./CounterDisplay2";

export function Counter2({ initialValue = 0 }) {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const handleInc = () => {
    setCount((c) => c + 1);
  };

  const handleDec = () => {
    setCount((c) => c - 1);
  };

  const handleRes = () => {
    setCount(initialValue);
  };

  return (
    <>
      <CounterDisplay2 count={count} />
      <div>
        <button onClick={handleInc}>+</button>
        <button onClick={handleDec}>-</button>
        <button onClick={handleRes}>Reset</button>
      </div>
    </>
  );
}
