import { useCounter } from "./useCounter";

export function CounterHooks({ itialValue = 0 }) {
  const { counter, onIncrement, onDecrement, onReset } = useCounter(itialValue);

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <button onClick={onReset}>RESET</button>
    </div>
  );
}
