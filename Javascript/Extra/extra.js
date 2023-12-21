//! ESEMPI GESTIONE ERRORI

// function checkAge(age, callback) {
//     if (age >= 26) {
//         callback(null, 'OK')
//     } else {
//         callback(new Error('KO'), null)
//     }
// }

// setTimeout(() => {
//     checkAge(28, (error, data) => {
//         if (error) {
//             console.log(error)
//         } else {
//             console.log(data)
//         }
//     })
// }, 4000)

// function doubleArray(arr, callback) {
//     if (arr.length === 4) {
//         callback(null, arr.map(callback))
//     } else {
//         callback(new Error('KO'), null)
//     }
// }

// function checkYear(year, callback) {
//     obj = {year: 1994, amount: 40000}
//     if (year <= 1999) {
//         callback(null, obj)
//     } else {
//         callback(new Error("L'anno non è presente in archivio"), null)
//     }
// }

// console.log('Caricamento in corso...')

// setTimeout(() => {
//     checkYear(1993, (error, data) => {
//         if (error) {
//             console.log(error)
//         } else {
//             console.log(data)
//         }
//     })
// }, 5000)



// Scrivi una funzione sommaAsincrona che accetti due numeri e una callback come 
// argomenti. La funzione dovrebbe eseguire la somma dei due numeri e passare il 
// risultato alla callback dopo un certo ritardo simulando un'operazione 
// asincrona (ad esempio, usando setTimeout).

function asyncFunc(a, b, callback) {
    console.log("Sto eseguendo l'operazione...")
    setTimeout(() => {
        let result = a + b
        callback(result)
    }, 3000)
}

function display(result) {
    console.log(result)
}

asyncFunc(1, 5, display)





// Crea una funzione filtraArray che accetti un array e una callback 
// di filtro. Questa funzione dovrebbe applicare la callback a ogni
//  elemento dell'array e restituire un nuovo array contenente solo
//   gli elementi che soddisfano il criterio definito dalla callback.


function filterArray(arr, callback) {
    return arr.filter(callback)
}

function filter(num) {
    return num % 2 === 0
}

let arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

let numeriPari = filterArray(arrayNum, filter)

console.log(numeriPari)



// Simula un'operazione asincrona annidata usando due funzioni con callback. 
// Ad esempio, una funzione ottieniDatiPrimi che ottiene dati iniziali e una 
// seconda funzione elaboraDati che elabora questi dati e passa il risultato 
// a una callback.



function ottieniDatiPrimi(callback) {
    setTimeout(() => {
        let data = [1, 2, 3, 4, 5, 6]
        callback(data)
    }, 1000)
}

function elaboraDati(data, callback) {
    setTimeout(() => {
        let result = data.map((num) => num * 2)
        callback(result)
    }, 3000)
}

ottieniDatiPrimi((data) => {
    elaboraDati(data, (result) => {
        console.log('Risultato operazione: ' + result)
    })
})


// Scrivi una funzione divisioneSicura che accetti due numeri e 
// restituisca il risultato della divisione. Utilizza try e catch 
// per gestire un eventuale errore nel caso in cui si tenti di 
// dividere per zero.

function divisioneSicura(dividendo, divisore) {

    try {
        if (divisore === 0) {
            throw new Error('Impossibile dividere per 0')
        } else {
            return dividendo / divisore
        }
    } catch (error) {
        return error.message
    }
}

console.log(divisioneSicura(10, 3.30303030303))



// Crea una funzione parsingNumero che converte una stringa in un numero intero. 
// Utilizza parseInt all'interno di un blocco try e gestisci l'errore con 
// catch nel caso in cui la stringa non sia un numero.


function parsingNumber(stringa) {
    try {
        const numero = parseInt(stringa)
        if (isNaN(numero)) {
            throw new Error('Non è un numero')
        } else {
            return numero
        }
    } catch (error) {
        console.log(error.message)
    }
}

console.log(parsingNumber("123"))


// Definisci una funzione ottieniProprieta che accetti un oggetto e una chiave. 
// Utilizza try e catch per gestire l'errore nel caso in cui la chiave non esista nell'oggetto.

function ottieniProprieta(obj, key) {
    try {
        if (!(key in obj)) {
            throw new Error('Chiave errata')
        } else {
            console.log(obj[key])
        }
    } catch (error) {
        return error.message
    }
}



const persona = {
    nome: "Mario",
    eta: 30
};


ottieniProprieta(persona, "nome")


