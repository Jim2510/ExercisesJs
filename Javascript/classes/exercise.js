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