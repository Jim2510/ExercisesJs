// Partendo dall'esercizio Le Callback - 5, includi la gestione degli errori. 
// Se la funzione di callback genera un errore, catturalo e gestiscilo.
// Modificare la funzione performOperation per gestire l'errore e registrare un messaggio di errore.

// all'interno della funzione principale, a differenza dell'esercizio 5,
// inseriamo un if else che verifica e ritorna il risultato solo se il tipo delle variabili
// utilizzate per la somma è 'number', altrimenti la callback genererà un errore accompagnato da
// un testo

function performOperation(a, b, callback) {

    if (typeof a === 'number' && typeof b === 'number') {
        let result = a + b
        callback(null, result)
    } else {
        // sintassi per generare l'errore
        callback(new Error('I valori devono essere numerici'), null)
    }
}

// inizializziamo la callback che verificherà se è stato generato l'errore
// e lo manderà a schermo o se la funzione lavora correttamente

function displayResult(error, result) {
    if (error) {
        console.log(error)
    } else {
        console.log(result)
    }
}

// come ultimo passaggio aggiuntivo ho creato una funzione delay che stampa un messaggio di esecuzione
// e chiama una funzione setTimeout dive all'interno a sua volta lancia la funzione 
// performOperation dove vengono passati i valori da sommare e richiama la callback
// che blocca la funzione in caso di errore stampando un messaggio o la esegue nel caso
// i criteri siano rispettati.



function delay() {
    console.log('Esecuzione in corso...')
    setTimeout(() => {
        performOperation(3, 5, displayResult), 2000
    }, 3000)
}

// chiamata della funzione delay

delay()

//todo: Rimuovere il delay e stampare il messaggio immediatamente nel caso di errore