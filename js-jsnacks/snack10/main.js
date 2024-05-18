'use strict';

// valore a = null
// ------
// b = chiedo valore numerico 5

// se b !== a 5 !== null
//   a = b; //a = 5;

// ------------
// b = chiedo valore numerico 7

// b !== a 7 !== 5
//   a = b // a = 7

// ------------
// b = chiedo valore numerico 7

// b !== a 7 !== 7 ----> interrompo il mio ciclo
//   a = b

// let num1 = null;

// for (let i = 0; i < 5; i++) {
//   let num2 = prompt('Inserisci un numero');

//   if (num1 === num2) {
//     console.log('hai vinto');
//     break;
//   } else {
//     num1 = num2;
//   }
// }

let num1 = null; //5 //7

for (let i = 0; i < 1; i++) {
  let num2 = prompt('Inserisci un numero'); //5; //7; //7

  if (num2 !== num1) {
    num1 = num2;
    i--; //-1;
  }
}
alert('hai vinto');
