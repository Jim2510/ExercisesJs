
/*
Utilizza il metodo forEach che prende un array di nomi 
di frutta e li stampa aggiungendo un punto esclamativo 
a ciascun nome di frutta.
*/

/*
! In questo esercizio viene semplicemente usaro un ciclo forEach che 
! utilizza all'interno una callback che concatena l'elemento ciclato
! con un punto esclamativo, 
*/

const fruits = ["Mela", "Banana", "Kiwi", "Fragola"];
fruits.forEach(fruit => console.log(fruit + '!')) // o console.log(`${fruit}!`)
