import { LanguageContext } from "../src/context/LanguageContext";
import { ClockContext } from "./context/ClockContext";

export function App() {
  return (
    <>
      <LanguageContext.Provider value={language}>
        <ClockContext />
      </LanguageContext.Provider>

      <select value={language} onChange={handleSetLanguage}>
        <option value="en">English</option>
        <option value="it">Italiano</option>
      </select>
    </>
  );
}
