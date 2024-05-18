'use strict';

// ciclo da 1 a 1000 - incremento di 1
// - se il numero % 2 === 0 stampo il numero
// fine ciclo

// ciclo da 1 a N - incremento di 1
// - se il numero % 2 === 0 stampo il numero
// fine ciclo

// ciclo da 0 a 1000 - incremento di 2
//   stampo il numero
// fine ciclo

// ciclo da 0 a N - incremento di 2
//   stampo il numero
// fine ciclo

const input = Number(prompt('Inserisci il limite della tua tabellina del 2'));

if (!isNaN(input)) {
  for (let i = 2; i <= input; i += 2) {
    console.log(i);
  }
} else {
  console.log('non hai inserito un valore valido');
}
