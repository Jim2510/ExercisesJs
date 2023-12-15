// Crea una funzione chiamata "contoAllaRovescia" che diminuirà 
// il conto alla rovescia di 1 unità e visualizzerà il tempo rimanente in console.
// Utilizza setInterval per chiamare la funzione contoAllaRovescia ogni secondo.
// Visualizza il messaggio "Conto alla rovescia in corso..." all'inizio.
// Quando il conto alla rovescia raggiunge 0, visualizza un messaggio che 
// indica che il conto alla rovescia è terminato.

let tempoRimanente = 10;

// Stampa del messaggio di inizio

console.log("Conto alla rovescia in corso...")

// dichiarazione della funzione che utilizza un 
// decrementatore e manda in stampa il valore della
// variabile aggiornato

function contoAllaRovescia() {
    //! Nota, il decrementatore può essere dichiarato
    //! già nel console.log
//   tempoRimanente--
  console.log(tempoRimanente--)
}

// dichiarazione della variabile che verrà utilizzata
// come parametro per la funzione clarInterval che
// andrà a stoppare il setInterval dopo 12 secondi.


const time = setInterval(contoAllaRovescia, 1000)

setTimeout(() => {
    clearInterval(time)
    // stampa in console messaggio finali
    console.log('END')
},12000)

