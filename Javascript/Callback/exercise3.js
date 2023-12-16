// Scrivi una funzione chiamata filterArray che accetta un array e una funzione 
// di callback come argomenti. -La funzione callback deve filtrare e restituire i
// numeri pari passati come argomento alla funzione filterArray
// filterArray dovrebbe restituire un nuovo array contenente solo gli 
// elementi per i quali la funzione di callback restituisce true.

// Come per il primo esercizio, dichiariamo una funzione madre che passa un array
// e una callback come parametri. All'interno applichiamo il metodo filter che prende come
// parametro la stessa callback che ci servirà per impostare le condizione per il metodo
// filter.

function filterArray(arr, callback) {
    return arr.filter(callback)
   }

   // creazione della callback che ritorna semplicemente i numeri pari
   
   function isEven(num) {
   return num % 2 === 0
   }
   
   const numbers = [1, 2, 3, 4, 5, 6];
   const evenNumbers = filterArray(numbers, isEven);
   console.log(evenNumbers); 