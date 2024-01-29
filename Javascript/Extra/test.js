// Obiettivo: Creare una funzione calcolaMedia che accetti un array di oggetti rappresentanti voti degli studenti e calcoli la media per ciascuna materia.*
// Input: L'input della funzione è un array di oggetti.
// Ogni oggetto rappresenta uno studente ed i relativi voti in diverse materie ha le seguenti proprietà:
// studente: Nome dello studente.
// materia: Array di oggetti contenenti il nome della materia ed il relativo voto.
// Se l'input della funzione non è un array, la Promise sarà rigettata restituendo un errore con il messaggio 'L'input non è un array'.
// Output: La funzione restituisce una Promise che, dopo un secondo di simulazione (simulando una richiesta al server),
// restituisce un nuovo array di oggetti con le seguenti proprietà:
// studente: Nome dello studente .
// media: Media scolastica dei voti per quello studente
// **/


const voti = [
    {
        studente: 'Alice',
        materia: [
            {
                nome: 'Matematica',
                voto: 8
            },
            {
                nome: 'Scienze',
                voto: 7
            },
            {
                nome: 'Storia',
                voto: 6
            }
        ]
    },
    {
        studente: 'Bob',
        materia: [
            {
                nome: 'Italiano',
                voto: 8
            },
            {
                nome: 'Scienze',
                voto: 9
            },
            {
                nome: 'Geografia',
                voto: 7
            }
        ]
    },
    {
        studente: 'Charlie',
        materia: [
            {
                nome: 'Matematica',
                voto: 6
            },
            {
                nome: 'Italiano',
                voto: 7
            },
            {
                nome: 'Storia',
                voto: 8
            }
        ]
    },
    {
        studente: 'Noah',
        materia: [
            {
                nome: 'Geografia',
                voto: 8
            },
            {
                nome: 'Scienze',
                voto: 7
            },
            {
                nome: 'Italiano',
                voto: 6
            }
        ]
    },
  ];


  const calcolaMedia = (array) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Array.isArray(array)) {
                const newArr = array.map(stud => {
                    const somma = stud.materia.reduce((acc, val) => acc + val.voto, 0)
                    const media = somma / stud.materia.length
                    return {studenti: stud.studente, media: media}
                })
                resolve(newArr)
            }else{
                reject(new Error("Valore in ingresso non valido"))
            }
        })
    })
  }

  calcolaMedia(voti)
  .then(data => console.log(data))
  .catch(error => console.log(error.message))