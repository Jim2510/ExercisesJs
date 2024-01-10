// Dato l'oggetto { name: "John", age: 30 } crea una funzione che simula un'operazione asincrona, come il recupero dei dati da un'API. 
// -Implementare una callback per gestire i dati recuperati. -Utilizzare setTimeout per simulare il ritardo dell'operazione.

//   Riscrivi la funzione fetchDataFromAPI dell'esercizio Le Callback - 6 utilizzando Promises per una migliore gestione degli errori.
// La promise dovrebbe risolversi con i dati e rifiutare con un messaggio di errore.


function fetchDataFromAPI2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true === false) {
                resolve({
                    name: "John",
                    age: 30
                })
            } else {
                reject(new Error('Dati non trovati'))
            }
        }, 3000)
    })
}

fetchDataFromAPI2().then((data) => {
    console.log(data)
}).catch((error) => {
    console.log('Error: ', error.message)
})



// function fetchDataFromAPI(callback) {
//     //! aggiunto messaggio di inizio elaborazione
//     console.log('Estrazione dati in corso...')
//     setTimeout(() => {
//         // dichiarazione dell'oggetto
//         const obj = {
//             name: "John",
//             age: 30
//         };
//         // chiamata della callback che passa come parametro l'oggetto
//         callback(obj);
//     }, 2000);
// }

// // dichiarazione della funzione callback alla quale abbiamo passato l'oggetto creato
// // in precedenza come parametro da restituire insieme ad un messaggios

// function handleData(data) {
//     console.log("Dati recuperati:", data);
//     // Puoi eseguire qui l'elaborazione dei dati ottenuti dalla API
// }

// fetchDataFromAPI(handleData);