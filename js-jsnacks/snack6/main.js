'use strict';

/*
Fate generare un numero random da 0 a 10 al computer, e chiedete all'utente di inserire un suo numero.
Se il numero scelto dall'utente è uguale al numero del computer informate l'utente che ha vinto, altrimenti ha perso.

computer = numero random (0 / 10); Math.floor(Math.random() * 11);
utente: inserire un numero => prompt()

se numero utente === numero computer => vinto
altrimenti => perso


*/

const computerNumber = Math.floor(Math.random() * 11);
const userNumber = Number(prompt('Inserisci un numero'));
if (!isNaN(userNumber)) {
  //confrontiamo i numeri

  if (computerNumber === userNumber) {
    console.log('Sei un veggente');
  } else {
    console.log('Non sei stato fortunato');
  }

  console.log(`I numeri sono: ${computerNumber} e ${userNumber}`);
} else {
  console.log('Non hai inserito un numero');
}
