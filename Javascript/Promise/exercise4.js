// -Crea una Promise che simula il recupero dei dati da un'API. A volte la 
// richiesta avrà successo, a volte fallirà con un messaggio di errore. 
// -Crea una variabile chiamata success con un valore numerico random da 0 a 0.5 
// -La chiamata avrà successo con il messaggio Data retrieved successfully se il 
// valore random è inferiore a 0.5 altrimenti fallisce con il messaggio Error: Failed to fetch data


// all'interno della funzione applichiamo una promise che gestisce la
// condizione 


function fetchDataFromAPI() {
    return new Promise((resolve, reject) => {
        let success = Math.floor(Math.random() + 0.5)
        console.log(success)
        if(success < 0.5){
            resolve(console.log(`Data retrieved successfully`))
        }else{
            reject(new Error('Failed to fetch data'))
        }


    })

}

fetchDataFromAPI().then((data) => {
    return data
}).catch((error) => {
    console.log('Error: ', error)
})