// In questo esercizio andremo a simulare il caricamento di moduli di un veicolo
// spaziale in modo asincrono e quindi lanciare il veicolo spaziale quando tutti i moduli sono stati caricati con successo!

// La funzione "caricaModulo" ritorna una promise simulando il caricamento di un modulo con un ritardo di 2 secondi!

// Implementa la funzione asincrona "lanciaVeicoloSpaziale" che chiama in sequenza la funzione "caricaModulo"
// per caricare i moduli A, B e C, attendendo il completamento di ciascuna operazione prima di passare alla successiva.

// Alla fine, quando tutti i moduli sono stati caricati con successo, stampa in console "Veicolo spaziale pronto per il lancio!".

const caricaModulo = (modulo) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Il modulo ${modulo} è stato caricato.`);
    }, 2000);
  });
}

const lanciaVeicoloSpaziale = async () => {
  try {
    console.log("Inizio del caricamento dei moduli.");

    // Carica il modulo A
    const moduloA = await caricaModulo('A');
    console.log(moduloA);

    // Carica il modulo B
    const moduloB = await caricaModulo('B');
    console.log(moduloB);

    // Carica il modulo C
    const moduloC = await caricaModulo('C');
    console.log(moduloC);

    console.log("Veicolo spaziale pronto per il lancio!");
  } catch (error) {
    console.error("Si è verificato un errore durante il caricamento dei moduli:", error);
  }
};

// Chiamare la funzione per lanciare il veicolo spaziale
lanciaVeicoloSpaziale();