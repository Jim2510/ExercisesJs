import { useEffect, useState, useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export function ClockContext() {
  const language = useContext(LanguageContext);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <p>
        {language === "en"
          ? `Current Time: ${date.toLocaleTimeString()}`
          : `Ora Corrente: ${date.toLocaleTimeString()}`}
      </p>
    </div>
  );
}
