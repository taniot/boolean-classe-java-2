'use strict';

//valori di default
const defaultKm = '0.5';
//bottoni
const formCalculator = document.getElementById('calculator-form');
const buttonReset = document.getElementById('btn-reset');
//input utente
const userAge = document.getElementById('user-age');
const userActivity = document.getElementById('user-activity');
const userKm = document.getElementById('user-km');

//result
const result = document.getElementById('result');
const resultContainer = document.getElementById('result-container');

//setting valore di default dei km utente
userKm.value = defaultKm;
const currentKm = document.querySelector('.current-km');

//imposto il valore iniziale visualizzato di km
currentKm.innerText = userKm.value;

userKm.addEventListener('change', function () {
  currentKm.innerText = userKm.value;
});

//invio del form
formCalculator.addEventListener('submit', function (event) {
  event.preventDefault();

  /*
  logica di calcolo
  */

  //inserisco risultato nel dom
  result.innerText = 'Hai bruciato 100 cal';
  //visualizzo contenitore risultato
  resultContainer.classList.remove('d-none');
});

buttonReset.addEventListener('click', function (event) {
  event.preventDefault();

  //default values
  userAge.value = '';
  userActivity.value = '';
  currentKm.innerText = defaultKm;
  userKm.value = defaultKm;

  result.innerText = '';
  resultContainer.classList.add('d-none');
});
