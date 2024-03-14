// Traccia 3: Informazioni sul Libro
// Scegli un libro che ti piace e crea una costante con il suo titolo.
// Effettua una chiamata GET a un'API di libri (ad esempio, Google Books API) per ottenere informazioni sul libro utilizzando il titolo.
// Crea e logga un oggetto con le informazioni principali del libro, come autore, data di pubblicazione e numero di pagine.
// Cicla attraverso gli autori e stampa solo quelli che hanno un nome composto.
// Gestisci i possibili errori della chiamata API.

//DOCUMENTAZIONE API -> https://developers.google.com/books/docs/v1/using?hl=it#WorkingVolumes

const title = "baffi";

document.addEventListener("DOMContentLoaded", () => {
    const getTitle = async () => {
        try {
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}`)
            if (response.ok) {
                const data = await response.json();
                const baffi = data.items[0].volumeInfo;
                const autori = data.items[0].volumeInfo.authors
                console.log(baffi)

                const obj = {
                    Autore: baffi.authors[0],
                    Data: baffi.publishedDate,
                    Pagine: baffi.pageCount
                }

                autori.forEach(el => {
                    if(el.includes(" ")) {
                        console.log(el)
                    }
                })

                console.log(obj)
            }else{
                throw new Error(response)
            }
        }catch(error){
            console.log(error)
        }
    }

    getTitle()
})