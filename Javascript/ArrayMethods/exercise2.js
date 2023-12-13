/* Implementare la funzione firstUncompletedNote che, dato un array di note, 
 restituisce la prima nota non completata. Una nota viene considerata completata se 
 tutti i todo presenti hanno il flag done impostato a true.
*/



function firstUncompletedNote(notes) {
  // soluzione che utilizza il metodo find il quale
  // richiama all'interno della callback un altro metodo
  // find che ci permetto di filtrare il primo elemento
  // che rispecchia i requisiti all'interno dell'oggetto
  // annidato

  return notes.find(note => note.todos.find(todo => todo.done === false))

  // soluzione che utilizza il metodo find che accetta
  // all'interno della callback un altro metodo every che
  // ci permetto di verificare se la condizione degli elementi 
  // annidati in 'todos' è vera e mette a paragone con la
  // callback usata su find restituendone il primo
  // valore che corrisponde ai criteri assegnati
  // !note.todos = false 
  // quando todo.done sarà false, la condizione sarà vera è find
  // restituirà quell'elemento
  
  // return notes.find(note => !note.todos.every(todo => todo.done));
}

const notes = [{
    id: 1,
    description: 'Workout program',
    todos: [{
        id: 1,
        name: 'Push ups - 10 x 3',
        done: true
      },
      {
        id: 2,
        name: 'Abdominals - 20 x 3',
        done: true
      },
      {
        id: 3,
        name: 'Tapis Roulant - 15min',
        done: true
      }
    ]
  },
  {
    id: 2,
    description: 'Front-end Roadmap',
    todos: [{
        id: 1,
        name: 'Learn HTML',
        done: true
      },
      {
        id: 2,
        name: 'Learn CSS',
        done: false
      },
      {
        id: 3,
        name: 'Learn JavaScript',
        done: true
      },
      {
        id: 4,
        name: 'Learn Angular',
        done: false
      }
    ]
  },
  {
    id: 3,
    description: 'My Movies Library',
    todos: [{
        id: 1,
        name: 'La città incantata',
        done: true
      },
      {
        id: 2,
        name: 'Avatar',
        done: true
      },
      {
        id: 3,
        name: 'Titanic',
        done: false
      }
    ]
  }
]

const noteInProgress = firstUncompletedNote(notes);
console.log('All notes: ', notes);
console.log('First note in progress: ', noteInProgress);