// Crea una funzione chiamata somma che accetta
// un numero qualsiasi di argomenti e restituisce 
//la somma di tali argomenti.

// Utilizza il parametro rest per raccogliere 
// gli argomenti. -Stampa in console l'output 
// della funzione somma.

function sum(...numbers) {
    return numbers.reduce((a, val) => a + val, 0)
}

const mySum = sum(2, 4, 6, 8, 10)

console.log(mySum)

