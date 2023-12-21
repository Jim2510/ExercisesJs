// -Crea una semplice Promise che si risolve dopo un ritardo di 2 secondi. 
// -Utilizzare setTimeout per simulare un'operazione asincrona.


// creiamo la funzione principale che manderà a schermo un semplice messaggio
// all'interno creiamo una promise che andrà a creare il messaggio o se la
// condizione non è rispettata genererà l'errore. All'interno della promise 
// applichiamo un setTime out per simulare un ritardo nell'operazione

function printSomething() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(true === true) {
                resolve(console.log('Risolta con ritardo'))
            }else{
                reject(new Error('Esplode tutto'))
            }
        }, 2000)
    })
}

// chiamata della funzione gestita da then e catch che ritorneranno rispettivamente
// i dati ricevuti o l'errore.

printSomething().then((data) => {
    data
}).catch(error => {
    console.log(error)
})