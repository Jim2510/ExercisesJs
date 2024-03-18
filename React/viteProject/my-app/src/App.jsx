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

export function App() {
  const [language, setLanguage] = useState("en");

  function handleSetLanguage(language) {
    setLanguage(language);
  }

  return (
    <>
      {/* <Container title="My Application">
        <Welcome name="User" />
        <Counter />
      </Container>
      <LanguageContext.Provider value={language}>
        <ClockContext />
      </LanguageContext.Provider>

      <button onClick={() => handleSetLanguage("en")}>En</button>
      <button onClick={() => handleSetLanguage("it")}>It</button> */}
      <GitHubUser />
    </>
  );
}
