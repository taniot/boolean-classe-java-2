'use strict';

//istruzioni da eseguire

/*
quello
che
voglio
*/

// document.writeln('Hello World!');

// console.log('buongiorno classe java 2');
// console.log('buongiorno classe java 2');
// console.log('buongiorno classe java 2');
// console.log('buongiorno classe java 2');
// console.log('buongiorno classe java 2');
// console.log('buongiorno classe java 2');
// console.log('buongiorno classe java 2');
// console.log('buongiorno classe java 2');

// alert('Hello World');

// console.log(document);
// console.log(document.getElementById('mio_id'));

// document.getElementById('mio_id').innerHTML = 'Hello World!';

// document.getElementById('id-mario').innerHTML =
//   'Non sono più un h2... sto scherzando';

// const myFirstVariable = 'Sono una variabile costante';
// myFirstVariable

// const myFirstVariable = 'valore const'; //undefined

//1000 loc

// console.log(myFirstVariable);

// //esempio let

// console.log(variableNew);

// const variable = 'paperino';
// let variableNew = 'pluto';
// variableNew = variable + ' ' + variableNew;

// //1000 loc

// let myNewVariable = variable + ' è arrivato a 1000 righe di codice';

// console.log(variableNew);
// console.log(myNewVariable);

// let test = 0;

// console.log(test);

// let miaVariabile = 'prova';
// console.log(miaVariabile);

// let counter;
// console.log(counter);
// counter = 10;
// console.log(counter);

// dichiarazione variabile
// let miaStringa;

// // assegnazione
// miaStringa = 'ciao';
// // utilizzo/richiamo
// alert(miaStringa);

// // assegnazione
// miaStringa = 'arrivederci';
// // utilizzo/richiamo
// alert(miaStringa);

// let counter = null;
// counter = 0;

// let counter:String = 'prova':
// counter = 0;

// const stringaVirgolette = 'Stringa tra virgolette.';
// const stringaApici = 'Stringa tra apici';

// console.log('stringaVirgolette: ', stringaVirgolette);
// console.log('stringaApici: ', stringaApici);

// const valore1 = '8';
// const valore2 = 8;

// console.log(valore1);
// console.log(valore2);

// const nome = 'Gaetano';
// const cognome = 'Frascolla';

// const nomeCompleto = nome + ' ' + cognome;

// console.log(nomeCompleto);

// const nomeCompletoTemplate = `${nome} ${cognome}`;

// console.log(nomeCompletoTemplate);

//numbers

// let firstNumber = 4;

// console.log(firstNumber + firstNumber);

// addizione, con il segno +
// let somma = 4 + 4; // 8
// console.log({ somma });
// // sottrazione, con il segno -
// let sottr = somma - 3; //5
// console.log({ sottr });
// // divisione, con il segno /
// let divisione = somma / 2; //4
// console.log({ divisione });
// // moltiplicazione, con il segno*
// let molt = sottr * 2; //10
// console.log({ molt });

// let sommaTest = 'ciao' - 4;
// console.log({ sommaTest });

// const firstName = prompt('Inserisci il tuo nome');
// const lastName = prompt('Inserisci il tuo cognome');

// //const fullName = firstName + ' ' + lastName;
// const fullName = `${firstName} ${lastName}`;

// console.log(fullName);

const firstName = prompt('Inserisci il tuo nome');
const lastName = prompt('Inserisci il tuo cognome');
const age = prompt('Inserisci la tua età');
const role = prompt('Inserisci la tua professione');

const output = `
------ Biglietto da visita ------

nome: ${firstName}
cognome: ${lastName}
età: ${age}
ruolo: ${role}

---------------------------------
Contattami per maggiori informazioni
`;

console.log(output);

document.getElementById('nome-utente').innerHTML = firstName;
document.getElementById('cognome-utente').innerHTML = lastName;
document.getElementById('eta-utente').innerHTML = age;
document.getElementById('ruolo-utente').innerHTML = role;

Gaetano;
Frascolla;
Verde;

GaetanoFrascollaVerde21;
