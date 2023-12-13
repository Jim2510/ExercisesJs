//Scrivi una funzione filterOutOdds che accetta
// un numero qualsiasi di argomenti e restituisce
// un array contenente solo i numeri pari.

// Utilizzare il parametro rest per raccogliere gli
// argomenti.

// Dichiariamo una funzione che utilizza un
// parametro rest per raggruppare gli argomenti
// che andiamo a filtrare con il metodo filter 
// all'interno che verifica se uno dei
// numeri è dispari e lo ritorna

function filterOutOdds(...args) {
    return args.filter(args => args % 2 !== 0)
}

const arr = filterOutOdds(1,2,3,4,5,6,7,8,9)

console.log(arr)