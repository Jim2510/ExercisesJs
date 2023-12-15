// Implementa la funzione lanciaDadi che:

// Generi casualmente due numeri tra 1 e 6 per rappresentare il lancio di due dadi.
// Visualizzi in console il risultato del lancio Lancio dei dadi: Dado 1 = ${dado1}, Dado 2 = ${dado2}.
// Utilizzi il metodo setTimeout per ritardare l' esecuzione della funzione "lanciaDadi" di 2 secondi.
// Prima dello scadere dei 2 secondi stampa in console il messaggio ""Lancio dei dadi in corso..."


setTimeout(() => {
    console.log('Lancio dadi in corso...')
}, 500)


   function lanciaDadi() {
    const dice1 = Math.floor(Math.random() * 6 + 1)
    const dice2 = Math.floor(Math.random() * 6 + 1)
    console.log(`Dado 1 = ${dice1}
Dado 2 = ${dice2}`)
}


setTimeout(lanciaDadi, 2000)