// Utilizza setTimeout per chiamare la funzione 
// "mostraPromemoria" 
// dopo un ritardo di 5 secondi.
// Prima che scadano i 5 secondi stampa 
// in console: "Il promemoria è in fase di 
// impostazione".


function mostraPromemoria() {
    console.log("Promemoria: È ora di fare una pausa!");
}

// Dichiarazione della funzione setTimeout che 
// stampa dopo 1 secondo il messaggio di lavorazione

setTimeout(() => {
    console.log('Il promemoria è in fase di lavorazione')
}, 1000)

// funzione setTimeout che ritarda la stampa
// del messaggio di promemoria

setTimeout(() => {
    mostraPromemoria()
}, 5000)