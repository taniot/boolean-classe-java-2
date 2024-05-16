'use strict';

console.log('biglietto del treno');

//bottone che avvia la generazione del ticket
const generateTicket = document.getElementById('generate-ticket');
const resetTicket = document.getElementById('reset-ticket');
// const generateTicket = document.querySelector('form#generate-ticket');
console.log(generateTicket);
//input utente
const ageInput = document.getElementById('age-input');
const kmInput = document.getElementById('km-input');
console.log(ageInput);
console.log(kmInput);

//valori per calcolo
const priceKm = 0.21;
//info per minorenni
const underAge = 18;
const discountUnderAge = 20;
//info per over
const overAge = 65;
const discountOverAge = 40;

//output biglietto
const formResult = document.getElementById('form-result');
const ageOutput = document.getElementById('age-output');
const kmOutput = document.getElementById('km-output');
const priceOutput = document.getElementById('price-output');

// generateTicket.addEventListener('submit', function (event) {
//   event.preventDefault();
//   console.log('ho inviato il form');
// });

generateTicket.addEventListener('click', function () {
  console.log('ho cliccato bottone');

  //salvo il valore corrente dei campi di input
  const ageInputValue = Number(ageInput.value);
  const kmInputValue = Number(kmInput.value);

  // console.log(ageInputValue);
  // console.log(kmInputValue);

  //calcolo il prezzo di partenza
  let price = kmInputValue * priceKm;
  console.log(price);

  //condizioni di sconto
  if (ageInputValue < underAge) {
    //sconto del 20%
    price -= (price * discountUnderAge) / 100;
  } else if (ageInputValue > overAge) {
    //sconto del 40%
    price -= (price * discountOverAge) / 100;
  }

  console.log(price);

  //popolo elementi del dom
  ageOutput.innerText = `${ageInputValue} anni`;
  kmOutput.innerText = `${kmInputValue} km`;
  priceOutput.innerText = `${price.toFixed(2)} €`;

  //mostro biglietto in pagina
  formResult.classList.remove('d-none');
});

resetTicket.addEventListener('click', function () {
  //svuoto i campi di input
  ageInput.value = '';
  kmInput.value = '';

  //nascondo il biglietto
  formResult.classList.add('d-none');
  //svuoto i valori di output
  ageOutput.innerText = '';
  kmOutput.innerText = '';
  priceOutput.innerText = '';
});
