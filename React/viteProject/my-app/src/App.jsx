import { Alertclock } from "./Alertclock";
import { Helloworld } from "./Helloworld";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { Mouseclicker } from "./Mouseclicker";
import { Clock } from "./Clock";
// import { MyForm } from "./MyForm";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { UncontrolledForm } from "./UncontrolledForm";

export function App() {
  const handleButtonClick = () => {
    const now = new Date();
    alert(`The current time is ${now.toLocaleTimeString()}`);
  };

  return (
    <>
      <Helloworld />
      <hr />
      <Welcome name="Gim" />
      <Counter />
      <Mouseclicker />
      <Clock />
      <InteractiveWelcome />
      <Login />
      <UncontrolledForm />
    </>
  );
}
