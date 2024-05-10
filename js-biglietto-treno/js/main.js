'use strict';

const prezzoKm = 0.21;
const etaUnder = 18;
const etaOver = 65;
const scontoUnder = 20;
const scontoOver = 40;

const kmUtente = parseInt(prompt('Inserisci i km che vuoi percorrere'));
console.log(kmUtente);

// - dichiaro una variabile etaUtente e salvo il valore di un prompt;

const etaUtente = parseInt(prompt('Inserisci la tua età'));
console.log(etaUtente);

// if (isNaN(kmUtente) || isNaN(etaUtente)) {
if (!isNaN(kmUtente) && !isNaN(etaUtente)) {
  let prezzo = kmUtente * prezzoKm;
  console.log(prezzo);

  if (etaUtente < etaUnder) {
    // prezzo = prezzo - (prezzo * scontoUnder) / 100;
    prezzo -= (prezzo * scontoUnder) / 100;
  } else if (etaUtente >= etaOver) {
    // prezzo = prezzo - (prezzo * scontoOver) / 100;
    prezzo -= (prezzo * scontoOver) / 100;
  }

  console.log(prezzo.toFixed(2));

  document.getElementById(
    'risultato-calcolo'
  ).innerHTML = `Il valore del biglietto è di ${prezzo.toFixed(2)} €`;
} else {
  console.log('i dati non sono validi');

  document.getElementById(
    'risultato-calcolo'
  ).innerHTML = `I dati inseriti non sono validi`;
}
