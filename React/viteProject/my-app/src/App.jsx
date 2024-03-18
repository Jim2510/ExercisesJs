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
import { Container } from "./component_composition/Container";

export function App() {
  return (
    <>
      <Container title="My Application">
        <Welcome name="User" />
        <Counter />
      </Container>
    </>
  );
}
