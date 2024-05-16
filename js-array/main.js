'use strict';

// const numero = 1;

// const classe = ['Gaetano', 'Davide', 'Rosy', 'Giovanni', 'Mattia'];

// console.log(numero);
// console.log(classe);

// const nums = [1, 2, 3, 4, 5, 6];

// nums.push(158);
// nums.push(-72);
// console.log(nums);

// console.log(nums);

// const boolean = [true, false, false, true, true];

// console.log(boolean);

// const daNonFare = ['gaetano', 1, true, 'prova', false, 25];

// console.log(daNonFare);

// const numero = 1;
// numero = 2;

// // creazione dell'array iniziale
// let iscritti = ['Luca', 'Marco', 'Paolo'];

// console.log(iscritti);

// // aggiunta di un elemento all'array
// iscritti.push('Michele');
// iscritti.push('Michele');
// iscritti.push('Michele');
// iscritti.push('Michele');

// console.log(iscritti);

const sabrina = 'Sabrina';
const antonio = 'Antonio';

// creazione dell'array iniziale
const iscritti = ['Luca', 'Marco', 'Paolo', sabrina];

// modifica di un elemento all'array
iscritti[1] = 'Giovanni';
iscritti[0] = 'Vincenzo';

iscritti.push(antonio);

console.log(iscritti);

// console.log(iscritti[0]);
// console.log(iscritti[1]);
// console.log(iscritti[2]);
// console.log(iscritti[3]);
// console.log(iscritti[4]);

for (let i = 0; i <= iscritti.length; i++) {
  console.log(iscritti[i]);
}

// for (let i = 1; i < 100; i++) {
//   console.log(i);
// }
