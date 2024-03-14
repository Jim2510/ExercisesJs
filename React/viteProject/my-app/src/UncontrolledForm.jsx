export function UncontrolledForm() {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
      session: formData.get("session") === "on" ? true : false,
    };

    console.log(data);
  };

  return (
    <>
      <form action="" onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="username"
          className="border-solid border-black border p-3"
        />
        <input
          type="password"
          name="password"
          className="border-solid border-black border p-3"
        />
        <input className="m-3" type="checkbox" name="session" />
        <button className="border-solid border-black border p-3">Login</button>
        <button type="reset" className="border-solid border-black border p-3">
          Reset
        </button>
      </form>
    </>
  );
}

// Vantaggi nell'utilizzo della FormData API:
// Ci permette di avere accesso ai dati forniti dal modulo html anzicchè creare tutta la struttura per la gestione. Inoltre è abbastanza flessibile da consentire l'aggiunta o la rimozione di campi del modulo senza dover modificare il codice che recupera i dati
// Svantaggi:
// Siamo limitati alle informazioni inserite nell'input, dunque nel caso in cui ci siano informazioni provenienti da altre fonti, inoltre viene a mancare il sistema di validazione.
