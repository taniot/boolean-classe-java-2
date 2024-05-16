'use strict';

// let x = 0;

// x++;
// x = x + 100;

// x--;
// x = x - 1;
// console.log(x);

//for

// let start = 1;
// let end = 100;

//calcolo
// for (let i = 0; i <= 100; i = i + 10) {
//   // if (i % 2 === 0) {
//   //   console.log(i);
//   // }
//   console.log(i);
// }

// console.log('sono dopo il ciclo');

// console.log(ul);
// let htmlLi = '';

// for (let i = 1; i <= 50; i++) {
//   htmlLi += `<li>${i}</li>`;
// }

// ul.innerHTML = htmlLi;

// const elementLi = 1;
// const elementLi = 2;

// for (let i = 0; i < 10; i++) {
//   const elementLi = 2;
// }

// console.log(elementLi);

// let i = 0;

// let age = 15;

// if (age > 10) {
//   let i = 50;
// }

// console.log(i);

// for (let i = 0; i < 10; i++) {
//   console.log(i);

//   console.log('--');
// }
// for (let y = 1; y <= 10; y++) {
//   console.log(y);
// }

// console.log(i);

// for (let i = 0; i < 100; i++) {
//   //operazioni
//   console.log(i);
// }

const ul = document.createElement('ul');

for (let i = 1; i <= 10; i++) {
  const elementLi = document.createElement('li');
  elementLi.classList.add('nome-classe');
  elementLi.innerText = i;
  ul.append(elementLi);
}

console.log(ul);
document.body.prepend(ul);
