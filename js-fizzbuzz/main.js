'use strict';

console.log('fizzbuzz');

/*
- ciclo for da 1 a 1000
  - se il contatore corrente è divisibile x 3 => Fizz
  - se il contatore corrente è divisibile x 5 => Buzz
  - se il contatore corrente è divisibile x 3 e x 5 => FizzBuzz
  - in tutti gli altri casi stampo il contatore corrente
- fine del ciclo for

*/

for (let i = 1; i <= 1000; i++) {
  // console.log(i);

  // console.log(i % 3);

  // if (i % 3 === 0) {
  //   console.log('fizz', i);
  // } else if (i % 5 === 0) {
  //   console.log('buzz', i);
  // } else if (i % 3 === 0 && i % 5 === 0) {
  //   console.log('fizzbuzz', i);
  // } else {
  //   console.log(i);
  // }

  // if (i % 3 === 0 && i % 5 === 0) { //15
  //   console.log('fizzbuzz');
  // } else if (i % 3 === 0) {
  //   console.log('fizz');
  // } else if (i % 5 === 0) {
  //   console.log('buzz');
  // } else {
  //   console.log(i);
  // }

  if (i % 15 === 0) {
    console.log('fizzbuzz');
  } else if (i % 3 === 0) {
    console.log('fizz');
  } else if (i % 5 === 0) {
    console.log('buzz');
  } else {
    console.log(i);
  }
}
