import { Alertclock } from "./Alertclock";
import { Helloworld } from "./Helloworld";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { Mouseclicker } from "./Mouseclicker";
import { Clock } from "./Clock";
import { MyForm } from "./MyForm";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { UncontrolledForm } from "./UncontrolledForm";
import FocusableInput from "./FocusableInput";
import { Mounted } from "./Mounted";
import { MyList } from "./MyList";
import { Colors } from "./Colors";
import { TodoList } from "./TodoList";

export function App() {
  const handleButtonClick = () => {
    const now = new Date();
    alert(`The current time is ${now.toLocaleTimeString()}`);
  };

  return (
    <>
      <Counter />
      <Mounted />
      <MyList
        items={[
          { id: 1, name: "Jane", age: 24 },
          { id: 2, name: "Kate", age: 29 },
          { id: 3, name: "John", age: 25 },
          { id: 4, name: "Ryan", age: 34 },
          { id: 5, name: "Jane", age: 65 },
        ]}
      />
      <Colors
        colors={[
          { id: 1, name: "Blue" },
          { id: 2, name: "Yellow" },
          { id: 3, name: "Red" },
          { id: 4, name: "Green" },
        ]}
      />
      <TodoList />
    </>
  );
}
