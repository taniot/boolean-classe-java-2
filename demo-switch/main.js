'use strict';

//switch: condizioni applicate ad un valore
//i confronti avvengono per identicità ===

const num = 5;

switch (num) {
  case 5:
    console.log('5 numero');
    /*
    se rimuoviamo questo break, anche il caso '5' verrà preso in considerazione, in quanto verrà effettuato num === 5 || num === '5'.
    Questo è il cosiddetto fall-through dello switch
    */
    break; //interrompe l'esecuzione dello switch a questo caso

  case '5':
    console.log('5 stringa');
    break;

  default:
    console.log('valore default');
    break;
}

//il caso default non deve essere necessariamente impostato in fondo.
//i casi vengono prima valutati e poi viene restituito il risultato

switch (num) {
  default:
    console.log('ciao');
  case 5:
    console.log('sono 5');
    break;
  case 'prova':
    console.log('prova');
    break;
}

//switch con condizioni personalizzate
//in questo caso possiamo beneficiare di altri operatori oltre a quello di identicità

switch (true) {
  case num === 5:
    console.log('sono 5');
    break;

  case num === 'ciao':
    console.log('sono ciao');
    break;

  case num !== 'ciao':
    console.log('non sono ciao');
    break;

  default:
    console.log('sono default');
}
