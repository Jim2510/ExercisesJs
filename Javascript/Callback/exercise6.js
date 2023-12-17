// Dato l'oggetto { name: "John", age: 30 } crea una funzione che simula un'operazione 
// asincrona, come il recupero dei dati da un'API. -Implementare una callback per gestire 
// i dati recuperati. -Utilizzare setTimeout per simulare il ritardo dell'operazione.

// inizializziamo la funzione principale passando una callback come parametro che verrà 
//chiamata all'interno di un setTimeout che ritarderà l'esecuzione di 2 secondi.

function fetchDataFromAPI(callback) {
    //! aggiunto messaggio di inizio elaborazione
    console.log('Estrazione dati in corso...')
    setTimeout(() => {
        // dichiarazione dell'oggetto
      const obj = { name: "John", age: 30 };
      // chiamata della callback che passa come parametro l'oggetto
      callback(obj);
    }, 2000);
  }
  
  // dichiarazione della funzione callback alla quale abbiamo passato l'oggetto creato
  // in precedenza come parametro da restituire insieme ad un messaggios

  function handleData(data) {
    console.log("Dati recuperati:", data);
    // Puoi eseguire qui l'elaborazione dei dati ottenuti dalla API
  }
  
  fetchDataFromAPI(handleData);