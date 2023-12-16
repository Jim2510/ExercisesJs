// Implementa la funzione lanciaDadi che:

// Generi casualmente due numeri tra 1 e 6 per rappresentare il lancio di due dadi.
// Visualizzi in console il risultato del lancio Lancio dei dadi: Dado 1 = ${dado1}, Dado 2 = ${dado2}.
// Utilizzi il metodo setTimeout per ritardare l' esecuzione della funzione "lanciaDadi" di 2 secondi.
// Prima dello scadere dei 2 secondi stampa in console il messaggio ""Lancio dei dadi in corso..."


// dichiarazione del setTimeout che stampa il messaggio di lancio

setTimeout(() => {
    console.log('Lancio dadi in corso...')
}, 500)

// funzione che genera 2 numeri random da 1 a 6 simulando i dadi e stampa un messaggio con il risultato dei dadi

   function lanciaDadi() {
    const dice1 = Math.floor(Math.random() * 6 + 1)
    const dice2 = Math.floor(Math.random() * 6 + 1)
    console.log(`Dado 1 = ${dice1}
Dado 2 = ${dice2}`)
}

// chiamata del setTimeout che ritarda l'esecuzione della funzione lanciaDadi di 2 secondi

setTimeout(lanciaDadi, 2000)