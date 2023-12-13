// Date due variabili a e b, scambia i loro 
// valori usando la destrutturazione.

let a = 5;
let b = 10;

// Prima soluzione che non inizializza un array
// di partenza

[a, b] = [b, a]

console.log(a)
console.log(b)

// Soluzione con la creazione di un array che
// contiene le variabili e ne estrae il valore
// delle proprietà

let arr = [a, b]
let [x , y] = arr

[x, y] = [y, x]

console.log(x)
console.log(y)