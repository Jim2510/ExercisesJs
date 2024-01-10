class Persona {
    constructor(nome, cognome, età) {
        this.nome = nome;
        this.cognome = cognome;
        this.età = età;
        this.saluta = () => {
            console.log(`${nome}`)
        }
    }
}


class Studente extends Persona {
    constructor(nome, cognome, età, materiaPreferita) {
        super(nome, cognome, età)
        this.materiaPreferita = materiaPreferita
    }
}

const persona = new Persona("Gianmarco", "Guglielmino", 29)
const studente = new Studente("Felice", "Curcetti", 33, "Religione")
console.log(studente)
persona.saluta()



// Creare una classe "Automobile" con proprietà marca e anno di produzione. Aggiungere un metodo 
// "dettagli" alla classe "Automobile" che stampi i dettagli della vettura.


class Automobile {
    constructor(marca, annoDiProduzione) {
        this.marca = marca;
        this.annoDiProduzione = annoDiProduzione;
        this.dettagli = () => `${marca} ${annoDiProduzione}`
        }
    }


const fiat = new Automobile("Fiat", 2000)
console.log(fiat.dettagli())



// Immagina di dover sviluppare un'applicazione di gestione di un negozio di libri.
//  Puoi utilizzare le classi e l'ereditarietà per modellare diversi tipi di libri e gestire i dati relativi ai libri in modo più organizzato.

//  1. Definisci una classe di base Libro con le seguenti proprietà:

//  titolo
//  autore
//  annoPubblicazione
//  prezzo
//  2. Crea una classe derivata LibroFisico che erediti dalla classe Libro. Aggiungi una nuova proprietà:
 
//  peso (rappresentato in grammi)
// 3. Crea una classe derivata Ebook che erediti dalla classe Libro. Aggiungi una nuova proprietà:
 
//  formato (ad esempio, PDF, ePub)
//  4. Aggiungi metodi alle classi per ottenere informazioni dettagliate sui libri, come:
 
//  getDettagliLibro() che restituisce una stringa con tutte le informazioni del libro.

//  5. Crea alcune istanze di libri fisici ed ebook, e chiamali per ottenere i dettagli.