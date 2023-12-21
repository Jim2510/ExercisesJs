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


function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true === true) {
                resolve(user1)
            } else {
                reject('Error, user not found')
            }
        }, 1000)
    })
}

function fetchUserPosts(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true === true) {
                resolve(user.post)
            } else {
                reject('Error, id not valid')
            }
        }, 1500)
    })
}

fetchUserData()
    .then((user) => {
        console.log(`Username: ${user.name}`);
        return fetchUserPosts(user);
    })
    .then((post) => {
        console.log(`Post dell'utente: ${post}`);
    })
    .catch((error) => {
        console.error('Error:', error);
    });