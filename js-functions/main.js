'use strict';

//funzione definita da utente

// let age = 25;

// if (age > 30) {
//   miaFunzione();
//   miaFunzione();
//   miaFunzione();
//   miaFunzione();
// } else {
//   console.log('non ho invocato la funzione');
// }

// //funzioni built in
// // alert()
// // prompt()

// function miaFunzione() {
//   console.log('benvenuti sono una funzione');
// }

//la funzione verifica che i numeri siano compresi tra 2 e 3 e li somma

// function a(b, c) {
//   console.log(b + c);
// }

// sommaNumeri(5);
// sommaNumeri(10, 2);
// sommaNumeri(11, 4, 5);
// sommaNumeri(23, 4);
// sommaNumeri(0, 4);
// sommaNumeri(-1, 4);

/*
sono la funzione a
b è un numero
c è un numero

il risultato è la somma dei due numeri


*/

// function sommaNumeri(num1 = 0, num2 = 0) {
//   //num1 = 0;
//   //num2 = 0;
//   let result = num1 + num2;

//   // return result;
//   console.log('sono prima del risultato');

//   if (result === 5) {
//     return result; //blocco esecuzione funzione
//   } else {
//     result = result + 50;
//   }

//   console.log('sono prima della fine');
//   return result;
// }

// console.log(sommaNumeri(2, 3));
// function gaetano(tipo = 'spaghetti') {
//   const pasta = tipo;
//   return pasta;
// }

// const pasta = gaetano();
// console.log(pasta);

// const pastaCorta = gaetano('penne');
// console.log(pastaCorta);

// const pastaFattaAMano = gaetano('lasagne');
// console.log(pastaFattaAMano);

// 1. **numeri random**:
//    generare 10 numeri random (con un for) attraverso una funzione (copiamola da w3schools) e stamparli a schermo

// for (let i = 0; i < 10; i++) {
//   const currentNumber = getRndInteger(1, 10);
//   console.log(currentNumber);
// }

// function getRndInteger(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

function pariODispari(num) {
  console.log(num);
  if (num % 2 === 0) {
    return 'pari';
  }

  return 'dispari';
}

// console.log(pariODispari(23));
// console.log(pariODispari(12));
// console.log(pariODispari(7));
// console.log(pariODispari('prova'));
// console.log(pariODispari(0));
// console.log(pariODispari(1758));
// console.log(pariODispari(-27));

// function pari(num) {
//   return num % 2 === 0;
// }

// console.log(pari(5));

// if (pari(2)) {
//   console.log('Il numero inserito è pari: ' + 2);
// } else {
//    console.log('Il numero inserito è dispari: ' + 3);
// }

/*
Crea una funzione chiamata sommaNumeri che dato un array di 10 numeri definito da voi nel codice, ne calcoli la loro somma e la restituisca come risultato.
 

Utilizzare la funzione sommaNumeri per stampare il risultato ottenuto.
*/

//con funzione
function sommaNumeri(elencoNumeri) {
  // console.log('dentro la funzione', elencoNumeri);

  let sum = 0;

  for (let i = 0; i < elencoNumeri.length; i++) {
    sum += elencoNumeri[i];
  }

  return sum;
}

//senza funzione
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sommaNumeri(numbers));
const numbers1 = [25, 89, 97];
console.log(sommaNumeri(numbers1));
