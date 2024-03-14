import { useEffect, useState } from "react";

export function Clock() {
  // usestate per salvare e modificare la data impostata come valore iniziale
  const [date, setDate] = useState(new Date());

  // useeffect che ci permette di avviare un side effect che tramite un
  // setinterval aggiorna lo state della data a quella corrente
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    // cleaner function utilizzata per evitare, durante l'uso della
    // strictmode la strictmode di far eseguire due volte la funzione.
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <p>Current Time: {date.toLocaleTimeString()}</p>
    </div>
  );
}
