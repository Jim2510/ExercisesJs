// Dato l'oggetto { name: "John", age: 30 } crea una funzione che simula un'operazione asincrona, come il recupero dei dati da un'API. 
// -Implementare una callback per gestire i dati recuperati. -Utilizzare setTimeout per simulare il ritardo dell'operazione.

//   Riscrivi la funzione fetchDataFromAPI dell'esercizio Le Callback - 6 utilizzando Promises per una migliore gestione degli errori.
// La promise dovrebbe risolversi con i dati e rifiutare con un messaggio di errore.


function fetchDataFromAPI(callback) {
// iniaiamo defnendo una nuova promise all'interno della funzione principale
// e passiamo come parametri resolve e reject che gestiranno il successo o l'errore
// dell'operazione.
    return new Promise((resolve, reject) => {
        //chiamiamo un setTimeout per creare un ritardo all'applicazione per simulare la ricerca dei dati
        setTimeout(() => {
            // definiamo l'oggetto
            const obj = {
                name: "John",
                age: 30
            }
            // verifichiamo se all'interno dell'oggetto la proprietà name è uguale a "John",
            // e se il risultato è true utilizza il parametro resolve per lanciare la callback
            if (obj.name === "John") {
                resolve(callback(obj))
            } else {
                // qui invece reject gestisce l'errore in caso la condizione espressa in precedenza risulti false
                reject('Error, user not found')
            }
        }, 1000)
    })
}

// definizione della callback che stampa il contenuto della proprietà name

function handleData(obj) {
    console.log(obj.name)
}

// chiamata della funzione principale che utilizza i metodi then e catch per gestire
// a tutti gli effetti la promise

fetchDataFromAPI(handleData).then((data) => {
    data
}).catch((error) => {
    console.log(error)
})