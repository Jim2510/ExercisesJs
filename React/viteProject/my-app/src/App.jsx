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
import { useState } from "react";
import { LanguageContext } from "../src/context/LanguageContext";
import { ClockContext } from "./context/ClockContext";
import { GitHubUser } from "./data_fetching/GitHubUser";
import { GitHubUsers } from "./data_fetching/GitHubUsers";
import { CounterHooks } from "./custom_hooks/CounterHooks";
import { Guser } from "./custom_hooks/use_github/Guser";
import { Form } from "./custom_hooks/Form";
import { ShowLocation } from "./custom_hooks/use_current_location/ShowLocation";

export function App() {
  const [username, setUsername] = useState("");
  // const [language, setLanguage] = useState("en");

  // function handleSetLanguage(event) {
  //   setLanguage(event.target.value);
  // }

  return (
    <>
      {/* <Container title="My Application">
        <Welcome name="User" />
        <Counter />
      </Container>
      <LanguageContext.Provider value={language}>
        <ClockContext />
      </LanguageContext.Provider>

      <select value={language} onChange={handleSetLanguage}>
        <option value="en">English</option>
        <option value="it">Italiano</option>
      </select> */}
      {/* <Counter /> */}
      {/* <CounterHooks /> */}
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Guser username={username} />
      <Form />
      <ShowLocation />
    </>
  );
}
