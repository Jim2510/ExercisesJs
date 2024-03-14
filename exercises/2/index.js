// Traccia 1: Informazioni sul Film
// Scegli un film che ti piace e crea una costante con il suo titolo.
// Effettua una chiamata GET a un'API di film (ad esempio, OMDB API) per ottenere informazioni sul film utilizzando il titolo.
// Crea e logga un oggetto con le informazioni principali del film, come titolo, anno di uscita e regista.
// Cicla attraverso gli attori e stampa solo quelli che hanno una lunghezza del nome superiore a 5 caratteri.
// Gestisci i possibili errori della chiamata API.

// DOCUMENTAZIONE API -> https://www.omdbapi.com/
// PS: info utili: ho già creato una apikey per consentirvi di utilizzare questa rotta = 8a9da3b7

document.addEventListener("DOMContentLoaded", () => {

    const titolo = "Onion movie"

    const getFilm = async () => {
        try {
            const response = await fetch(`http://www.omdbapi.com/?t=${titolo}&apikey=8a9da3b7`)
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                const obj = {
                    title: data.Title,
                    year: data.Year,
                    director: data.Director
                }
                console.log(obj)

                const attori = data.Actors.split(",")

                attori.forEach(el => {
                    if (el.length >= 5) {
                        console.log(el)
                    }
                })

            } else {
                throw new Error(response.status)
            }
        }catch (error) {
            console.error(error)
    }

    } 

    getFilm()
})