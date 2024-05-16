'use strict';

//ho una lista degli invitati
const invitati = ['Pippo', 'PLUTO', 'pAperino'];
//di default non ti conosco, e non puoi partecipare
let invitato = false;

//chiedo all'utente come si chiama
const input = prompt('Inserisci il tuo nome');

// if (users.includes(input)) {
//   console.log('puoi partecipare alla festa');
// } else {
//   console.log('non puoi partecipare alla festa');
// }

//controllo se l'utente è invitato
for (let i = 0; i < invitati.length; i++) {
  //javascript è sensibile, meglio non esagerare con la rigidità, magari ho sbagliato a scrivere maiuscolo/minuscolo
  const currentValue = invitati[i].toLowerCase(); //-> pippo - pluto - paperino
  const checkValue = input.toLowerCase(); //-> Gaetano -> gaetano

  //se è invitato, lo dichiaro e (opzionale) interrompo il ciclo
  if (currentValue === checkValue) {
    invitato = true;
    // break;
  }
}

//stampo un gradevole messaggio in console
if (invitato === true) {
  console.log('puoi partecipare alla festa');
} else {
  console.log('non puoi partecipare alla festa');
}
