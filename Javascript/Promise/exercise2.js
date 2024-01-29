// -Crea una catena di Promises per simulare un'operazione asincrona in più fasi. 
// -La prima Promise recupera i dati dell'utente { id: 1, name: 'John' }. -La seconda 
// Promise recupera i post dell'utente ['Post 1', 'Post 2', 'Post 3']. -Infine, chiama 
// le funzioni per recuperare e stampare in console il nome dell'utente e i titoli dei post.


// Creazione dell'oggetto
let user1 = {
    id: 1,
    name: 'John',
    post: ['Post 1', 'Post 2', 'Post 3']
}

// Prima funzione che genera una promise che risolve o genera l'errore passando,
// una condizione

function fetchUserData(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true === true) {
                resolve(user)
            } else {
                reject('User not found')
            }
        }, 1000)
    })
}

// seconda funzione che prende come parametro l'oggetto e che contiene una promise
// all'interno che gestisce un eventuale errore o in caso contrario restituisce la
// proprietà post dell'oggetto che passeremo

function fetchUserPosts(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true === true) {
                resolve(user.post)
            } else {
                reject('Posts not found')
            }
        }, 1500)
    })
}

// chiamata della funzione alla quale associamo il then per stampare 
// l'utente e lanciare la seconda funzione che sarà gestita da un altor 
// .then che stamperà i post. Alla fine della concatenazione applichiamo un
// .catch per mandare a schermo il primo eventuale errore che ci ritornerà

fetchUserData(user1)
    .then((user) => {
        console.log(`Username: ${user.name}`);
        return fetchUserPosts(user);
    })
    .then((post) => {
        console.log(`Post dell'utente: ${post}`);
    })
    .catch((error) => {
        console.error('Error:', error.message);
    });