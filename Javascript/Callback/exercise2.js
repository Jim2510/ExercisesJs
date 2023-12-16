// Crea una funzione chiamata delay che accetta una funzione di callback 
// e un ritardo temporale in millisecondi come argomenti.
// delay dovrebbe eseguire la funzione di callback dopo il ritardo specificato.

// funzione delay con all'interno un setTimeout
// che prende come parametri la callback che andremo
// a passare e imposta il parametro time che useremo
// quando chiameremo la funzione principale

function delay(callback, time) {

    // console log che stampa un messaggio prima
    // dello scadere del delay

    console.log('Attendere')
    setTimeout(callback, time)
}

// creazione della callback che manda a schermo un
// messaggio

function printMessage() {
    console.log("Processo terminato dopo 2 secondi")
}

// chiamata della funzione

delay(printMessage, 2000)