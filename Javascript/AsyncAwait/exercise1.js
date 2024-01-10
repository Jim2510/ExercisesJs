// La funzione caricamentoDati simula il caricamento di dati asincroni con un ritardo di 2 secondi!

// Implementa la funzione ottieniDatiutilizzando await per attendere il caricamento dei dati, quindi visualizza i dati ottenuti in console.



function caricamentoDati() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(console.log("Questi sono i dati ottenuti dalla fonte asincrona."));
        }, 2000);
    });
}

async function ottieniDati() {
    try {
        await caricamentoDati()
    } catch (error) {
        console.log(error.message)
    }
}

ottieniDati()