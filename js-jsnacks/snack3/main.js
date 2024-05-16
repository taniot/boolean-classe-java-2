'use strict';

//inizializzo contatore
let count = 0;
//quante volte devo chiedere input all'utente?
let times = 3;

//eseguo l'azione times volte
for (let i = 1; i <= times; i++) {
  //chiedo numero a utente e lo trasformo
  const input = Number(prompt(i + ' Inserisci un numero'));
  //se è un numero lo sommo al contatore
  if (!isNaN(input)) {
    count += input;
  }
}

//stampo il risultato
console.log(`Il risultato dei numeri inseriti è ${count}`);
