/*
Implementare la funzione adultFilter che, 
dato un array di persone, filtra e restituisce 
soltanto coloro che sono maggiorenni.
*/

/* 
! Per filtrare dall'array solo le persone maggiorenni usiamo 
! il metodo filter che ci permette di applicare dei parametri 
! tramite una callback all'interno del metodo e restituire solo 
! quegli elementi che rispecchiano quei criteri.
*/


function adultFilter(persons) {
    return persons.filter(person => person.age >= 18)
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
  
  const adults = adultFilter(persons);
  console.log(persons);
  console.log(adults);