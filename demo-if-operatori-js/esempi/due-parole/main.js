'use strict';
console.log('sono incluso correttamente');

// Chiediamo all'utente due parole in successione.

// - creo una variabile parola1 e le assegno il valore di un prompt; (word1);

const word1 = prompt('Inserisci la prima parola');

// - creo una variabile parola2 e le assegno il valore di un prompt; (word2);

const word2 = prompt('Inserisci la seconda parola');

// Andiamo poi a verificare quale delle due parole è più lunga e stampiamo in console un messaggio appropriato.

// SE (parola1 piu lunga di parola2)
//   -- la parola più lunga è parola1
// ELSE IF (parola2 piu lunga di parola1)
//   -- la parola più lunga è parola2
// ELSE
//   -- le parole sono lunghe uguali

if (word1.length > word2.length) {
  console.log('la parola più lunga è parola1');

  console.log(
    `La parola ${word1} (${word1.length}) è più lunga di ${word2} (${word2.length})`
  );
} else if (word2.length > word1.length) {
  console.log('la parola più lunga è parola2');

  console.log(
    `La parola ${word2} (${word2.length}) è più lunga di ${word1} (${word1.length})`
  );
} else {
  console.log('Le due parole hanno la stessa lunghezza');

  console.log(
    `La parola ${word1} (${word1.length}) è uguale a ${word2} (${word2.length})`
  );
}
