// Dato uno studente oggetto nidificato con 
// informazioni sulle proprietà e voti, 
// utilizza la destrutturazione dell'oggetto 
// per creare variabili nome, età e voto che 
// contengano i valori dell'oggetto nidificato.

const student = {
    info: { name: "Bob", age: 25 },
    grades: { math: 95, science: 89 }
  };

  const {name: nome, age: età} = student.info
  const {math: votoMath, science: votoScience} = student.grades

  console.log(nome)
  console.log(età)
  console.log(votoMath)
  console.log(votoScience)