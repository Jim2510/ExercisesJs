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
