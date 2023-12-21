// Convertire la seguente funzione basata su callback in una funzione basata su Promise.

// function callback_BasedFunction(arg1, arg2, callback) {
//     setTimeout(() => {
//         const result = arg1 + arg2;
//         if (result % 2 !== 0) {
//             callback(null, result);
//         } else {
//             callback(new Error('Result is not odd!'), null);
//         }
//     }, 1000);
// }

// Per convertire la funzione ci basta eliminare la callback
// e sostituirla con una promise. La condizione viene valutata e verrà
// restituito il risultato nel caso sia rispettata, altrimenti creiamo un errore
// che sarà gestito dal catch durante la chiamata

function promise_BasedFunction(arg1, arg2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = arg1 + arg2
            if (result % 2 !== 0) {
                resolve(console.log(result))
            } else {
                reject(new Error('Result is not odd!'))
            }
        }, 1000)
    })
}

// chiamata della funzione che passa due numeri e applica il then ed il catch
// per la gestione della promise

promise_BasedFunction(1, 2).then((data) => {
    return data
}).catch(error => {
    console.log('Error: ', error)
})