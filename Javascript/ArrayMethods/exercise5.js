/*
Implementare la funzione ageAverage che, dato un array di persone, 
calcola l'età media.
*/

/*
! Il metodo reduce ci permette di inizializzare una callback che 
! utilizza come parametri un accumulatore e una variabile che 
! assume il valore degli elementi dell'array e ritorna un solo
! elemento che rispecchia le condizioni stabilite nella callback
*/


function calculateAverageAge(persons) {
    const range = persons.reduce((a, personAge)=> a + personAge.age, 0)
    return range / persons.length
  }
  
  
  const persons = [
    { name: 'Paul', age: 16 },
    { name: 'George', age: 17 },
    { name: 'Lucas', age: 21 },
    { name: 'Marco', age: 32 },
    { name: 'Peter', age: 18 },
    { name: 'Carl', age: 13 },
    { name: 'Simon', age: 24 },
    { name: 'Mark', age: 15 },
    { name: 'Sandra', age: 34 },
    { name: 'Alice', age: 28 }
  ];
  
  const average = calculateAverageAge(persons) 
  console.log(persons);
  console.log(average);