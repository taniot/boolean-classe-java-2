'use strict';
console.log('pari e dispari');

/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

Sommiamo i due numeri

Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

*/

const sides = ['pari', 'dispari', 'prova'];

const inputUserSide = prompt('Inserisci pari o dispari'); //dispari
console.log('side', inputUserSide);

// if (
//   inputUserSide.toLowerCase() === 'pari' ||
//   inputUserSide.toLowerCase() === 'dispari'
// ) {
if (sides.includes(inputUserSide.toLowerCase())) {
  const inputUserNumber = parseInt(
    prompt('Inserisci un numero compreso tra 1 e 5')
  ); //numero tra 1 e 5;

  console.log('user number', inputUserNumber);

  const inputCPUNumber = getRndInteger(1, 5); //numero tra 1 e 5 da generare randomicamente
  console.log('cpu number', inputCPUNumber);

  const numberSum = inputUserNumber + inputCPUNumber;
  console.log('sum', numberSum);

  if (isEven(numberSum) && inputUserSide === 'pari') {
    console.log('vince utente');
  } else if (!isEven(numberSum) && inputUserSide === 'dispari') {
    console.log('vince utente');
  } else {
    console.log('vince computer');
  }
} else {
  console.log('devi inserire PARI o DISPARI');
}

//generazione numero random
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//numero pari?
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  }

  return false;
}
