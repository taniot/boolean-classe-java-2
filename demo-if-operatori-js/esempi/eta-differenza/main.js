'use strict';

// Chiedere all'utente con due prompt gli anni di due persone e comunicare quale delle due è più grande

// Chiedere all'utente con due prompt gli anni di due persone

// - creo una variabile eta1 e le assegno il valore di un prompt; (age1);
// - trasformo eta1 in numero
const age1 = parseInt(Number(prompt('Inserisci età del primo utente'))); // parseInt('ciao') -> NaN  //numero intero //NaN

// - creo una variabile eta2 e le assegno il valore di un prompt; (age2);
// - trasformo eta2 in numero
const age2 = parseInt(Number(prompt('Inserisci età del secondo utente'))); //numero intero //NaN

console.log(age1);
console.log(age2);

if (!isNaN(age1) && !isNaN(age2)) {
  console.log('entrambi i valori sono numerici');

  if (age1 > age2) {
    console.log('age1');
  } else if (age2 > age1) {
    console.log('age2');
  } else {
    console.log('coetanei');
  }
} else {
  console.log('uno dei due valori non è numerico, riprova');
}

// SE (eta1 è un numero E eta2 è un numero)
// --
//   SE (age1 maggiore age2)
//   --age1 maggiore age2
//   ELSE IF (age2 maggiore age1)
//   --age2 maggiore age1
//   ELSE
//   -- sono coetanei
// ALTRIMENTI
//   -- stampo in console "inserisci due valori numerici"
