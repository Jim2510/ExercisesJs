// Crea una funzione chiamata runCallbacks che accetta un array di funzioni di callback come argomento.
// La funzione dovrebbe eseguire ogni callback nell'ordine in cui appaiono nell'array.


// soluzione che utilizza un metodo foreach per ciclare
// l'array e ritornare le callback in ordine

function runCallbacks(callbacks) {
    // forEach che passa come parametri le funzioni dell'array
    callbacks.forEach(callback => {
      callback()  
    });
}

function firstCallback() {
    console.log('Primo messaggio')
}

function secondCallback() {
    console.log('Secondo messaggio')
}

function thirdCallback() {
    console.log('Terzo messaggio')
}
const callbackArray = [firstCallback, secondCallback, thirdCallback];
runCallbacks(callbackArray);

const [first, second, third] = callbackArray


// Soluzione che utilizza la destrutturazione degli array per accedere alle singole funzioni

function rnCallbacks(callbacks) {

    // all'interno della funzione principale andiamo a destrutturare gli elementi dell'array che andremo a passare
    // dandoci la possibilità di accedere alla singola funzione e stamparle in ordine senza eseguire un ciclo.
    const [call1, call2, call3] = callbacks;
    call1();
    call2();
    call3();
}

function firstCall() {
    console.log('Primo messaggio')
}

function secondCall() {
    console.log('Secondo messaggio')
}

function thirdCall() {
    console.log('Terzo messaggio')
}

const callArray = [firstCallback, secondCallback, thirdCallback];
runCallbacks(callArray);
