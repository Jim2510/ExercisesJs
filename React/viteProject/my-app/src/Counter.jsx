import { useEffect, useState, useRef } from "react";
import { Counterdisplay } from "./Counterdisplay";

export function Counter({ initialValue = 0 }) {
  const [counter, setCounter] = useState(initialValue);
  const directionRef = useRef(null);
  const prevDirectionRef = useRef(null);

  useEffect(() => {
    if (counter > initialValue) {
      directionRef.current = "up";
    } else {
      directionRef.current = "down";
    }
    if (directionRef.current !== prevDirectionRef.current) {
      console.log(directionRef.current);
      prevDirectionRef.current = directionRef.current;
    }
  }, [counter, initialValue]);

  const handleCounterIncrement = () => {
    setCounter((c) => c + 1);
  };

  const handleCounterDecrement = () => {
    setCounter((c) => c - 1);
  };

  const handleCounterReset = () => {
    setCounter(initialValue);
  };

  return (
    <>
      <Counterdisplay counter={counter} />
      <div className="flex items-center justify-between">
        <button className="p-2" onClick={handleCounterIncrement}>
          +
        </button>
        <button className="p-2" onClick={handleCounterDecrement}>
          -
        </button>
        <button className="p-2" onClick={handleCounterReset}>
          Reset
        </button>
      </div>
    </>
  );
}
