// Crea una template string che genera un 
// messaggio di saluto con un nome e un messaggio 
// personalizzato.


const nome = "Jhon";
const message = "Welcome"

// semplice utilizzo di template strings come messaggio salvato all'interno
// di una variabile 

const sayHello = `${message} ${nome}`

console.log(sayHello)

// utilizzo del template string in un ternary operator

const greet = nome !== '' ? `${message} ${nome}` : `${message} user` ;

console.log(greet)

// utilizzo del template string all'interno di una funzione che genera un
// messaggio personalizzato in base a se è stato inserito o meno il valore
// nella variabile nome

function greeting() {
    if (nome !== '') {
       return console.log(`${message} ${nome}`)
    } else {
       return console.log(`${message} user`)
    }
}

greeting()



