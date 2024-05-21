'use strict';

//inizio
const strings = ['pippo', 'PLUTO', 'Paperino'];
const result = [];

for (let i = 0; i < strings.length; i++) {
  // console.log(i);
  // console.log(strings[i]);
  let currentString = strings[i];
  // currentString = currentString.toLowerCase();
  console.log(currentString);

  const stringResult =
    currentString.charAt(0).toUpperCase() +
    currentString.slice(1).toLowerCase();

  result.push(stringResult);

  // currentString[0].toUpperCase();
  // console.log(currentString[0].toUpperCase());
  // console.log(currentString);
  // currentString[0] = currentString[0].toUpperCase();
  // console.log(currentString);
  //solo la prima lettera in upper
  //le altre lettere in lower
}

//fine
console.log(result);
