'use strict';

/*

- prendere una parola in input
- trasformare la parola in tutto maiuscolo o minuscolo
- creare inverso della parola (specchiare la parola)
- confrontare le due parole (input e specchio)
- se le due parole sono equivalenti => palindromo
- se non sono equivalenti => non palindromo


*/

console.log('palindroma');

/*
casi
'' parola vuota
'a' parola di un carattere
'aa' parola di più caratteri
*/

let input = 'Anna';

if (isPalindrome(input)) {
  console.log(`La parola ${input} è palindroma`);
} else {
  console.log(`La parola ${input} non è palindroma`);
}

// function isPalindrome(input) {
//   if (input.length === 0) return false;
//   if (input.length === 1) return true;

//   const inputLower = input.toLowerCase();
//   const inputReverse = inputLower.split('').reverse().join('');

//   if (inputLower === inputReverse) {
//     return true; //false
//   }

//   return false;
// }

// function isPalindrome(input) {
//   if (input.length === 0) return false;
//   if (input.length === 1) return true;

//   const inputLower = input.toLowerCase();

//   // const inputReverse = inputLower.split('').reverse().join('');

//   let inputReverse = '';

//   //pippo
//   for (let i = inputLower.length - 1; i >= 0; i--) {
//     inputReverse += inputLower[i];
//   }

//   if (inputLower === inputReverse) {
//     return true; //false
//   }

//   return false;
// }

//versione avanzata

function isPalindrome(input) {
  if (input.length === 0) return false;
  if (input.length === 1) return true;

  const inputLower = input.toLowerCase();

  let a = 0;
  let b = inputLower.length - 1;

  while (a < b) {
    if (inputLower[a] !== inputLower[b]) {
      return false;
    }
    a++;
    b--;
  }

  return true;
}
