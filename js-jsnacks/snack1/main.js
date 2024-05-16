'use strict';

console.log('snack1');

//chiediamo all'utente primo valore
const num1 = Number(prompt('Inserisci il primo numero'));
//chiediamo all'utente secondo valore
const num2 = Number(prompt('Inserisci il secondo numero'));

//verifico che siano entrambi numeri
if (!isNaN(num1) && !isNaN(num2)) {
  if (num1 > num2) {
    console.log(`Il primo numero è maggiore del secondo: ${num1} > ${num2}`);
  } else if (num2 > num1) {
    console.log(`Il secondo numero è maggiore del primo: ${num2} > ${num1}`);
  } else {
    console.log(`I numeri sono uguali: ${num2} = ${num1}`);
  }
} else {
  console.log('Inserisci 2 numeri');
}
