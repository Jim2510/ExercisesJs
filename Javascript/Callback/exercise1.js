// Scrivi una funzione chiamata doubleArray che accetta 
// un array e una funzione di callback come argomenti.
// doubleArray deve applicare la funzione di callback a ciascun elemento dell'array 
// e restituire un nuovo array con i valori trasformati.

// In questo caso viene dichiarata una funzione che prende come parametri
// un arr e una callback che viene richiamata all'interno del metodo map
// che ci servirà per modificare gli elementi e restituire un nuovo
// array con il contenuto aggiornato.

function doubleArray(arr, callback) {
    return arr.map(callback);
}

// inizializzazione dell'array

let num = [1, 2, 3, 4, 5, 6, 7, 8 , 9, 0];

// qui viene chiamata la funzione double array che prende utilizza
// num come parametro array e una callback che raddoppia il numero 
// che viene ciclato con map e viene salvata in una varaibile

let doubleNum = doubleArray(num, (n) => n * 2)

// stampa della funzione 

console.log(doubleNum)

// Soluzione con l'utilizzo di una callback inizializzata all'esterno
// In questo caso la funzione principale viene dichiarata nello stesso
// modo

function sumArray(arr, callback) {
    return arr.reduce(callback);
}

// dichiariamo una funzione che prende due numeri come parametri
// e li somma

function add(a, b) {
    return a + b;
}

// inizializzazione dell'array

let num1 = [2, 4, 6, 8];

// chiamata della funzione che prende come parametri l'array ma
// questa volta invece di avere un arrow function, inseriamo
// direttamente la funzione dichiarata in precedenza

let sumNum = sumArray(num1, add)

// stampa del risultato della funzione

console.log(sumNum)