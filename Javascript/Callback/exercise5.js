// Crea una funzione che accetta due numeri come argomenti e una funzione di callback.
// La funzione dovrebbe eseguire un'operazione matematica sui numeri e passare il risultato alla funzione di callback.
// Ad esempio, puoi creare una funzione per aggiungere due numeri e passare una funzione di callback che visualizza il risultato.



function performOperation(a, b, callback) {

    // salvataggio della somma dei parametri in una variabile
  let result = a + b;
    // chiamata della callback che pssa come parametro il risultato
  callback(result)
}

function displayResult(result) {
    // funzione che stampa il risultato passata come callback alla funzione principale
  console.log(`La somma è: ${result}`)
}

// chiamata della funzione principale

performOperation(5, 3, displayResult);