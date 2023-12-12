const studenti = [
    { nome: "Alice", voto: 95 },
    { nome: "Bob", voto: 88 },
    { nome: "Carol", voto: 76 },
    { nome: "David", voto: 92 },
    { nome: "Eve", voto: 84 },
  ];

  // * Foreach
  // Viene utilizzato un ciclo forEach che utilizza una callback come parametro
  // per restituire il nome di ciascun elemento dell'array.

  studenti.forEach(student => console.log(student.nome));

  // * Voto >= 90
  // Il metodo find ci permette, tramite una callback che stabilisce una o più
  // condizioni, di trovare il primo elemento che rispecchia i criteri indicati
  // nella callback e restituirlo

  const ninety = studenti.find(student => student.voto >= 90);

  console.log(ninety);

  // * Media voti 
  // Per stabilire la media dei voti utilizziamo il metodo reduce
  // che ci permette di restituire un unico valore subordinato a
  // delle condizioni che stabiliamo nella callback

  // ! All'interno della callback utilizzata come parametro del metodo reduce
  // ! vengono passati sia una variabile accumulatrice che salva il risultato
  // ! di ogni iterazione e il parametro che servirà ad indicare l'elemento 
  // ! su cui vogliamo lavorare oltre ad un elemento (0) che servirà come valore di
  // ! partenza.

  const range = studenti.reduce((a, student) => a + student.voto / studenti.length, 0)

  console.log(range)

  // * Nomi in maiuscolo
  // In questo esercizio ho utilizzato il metodo map, passando una callback 
  // come parametro che modifica gli elementi all'interno dell'array e ne
  // restituisce l'array con il contenuto modificato.

  const upperCase = studenti.map(student => student.nome.toUpperCase());

  console.log(upperCase)

  // * Voti sopra 85
  // Per svolgere questo esercizio è stato utilizzato il metodo filter
  // che a differenza del metodo find restituisce tutti gli elementi che 
  // rispecchiano le condizioni stabilite all'interno della callback del
  // metodo filter

  const filterVotes = studenti.filter(student => student.voto >= 85)

  console.log(filterVotes);
