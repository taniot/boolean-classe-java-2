'use strict';

console.log('snack 1');

const cars = [
  {
    marca: 'marca 1',
    modello: 'modello 1',
    alimentazione: 'benzina',
  },
  {
    marca: 'marca 2',
    modello: 'modello 2',
    alimentazione: 'diesel',
  },
  {
    marca: 'marca 3',
    modello: 'modello 3',
    alimentazione: 'metano',
  },
  {
    marca: 'marca 4',
    modello: 'modello 4',
    alimentazione: 'elettrico',
  },
  {
    marca: 'marca 5',
    modello: 'modello 5',
    alimentazione: 'gpl',
  },
  {
    marca: 'marca 6',
    modello: 'modello 6',
    alimentazione: 'benzina',
  },
  {
    marca: 'marca 7',
    modello: 'modello 7',
    alimentazione: 'diesel',
  },
  {
    marca: 'marca 8',
    modello: 'modello 8',
    alimentazione: 'elettrico',
  },
  {
    marca: 'marca 9',
    modello: 'modello 10',
    alimentazione: 'benzina',
  },
  {
    marca: 'marca 10',
    modello: 'modello 10',
    alimentazione: 'benzina',
  },
];

const benzina = [];
const diesel = [];
const altre = [];

for (let i = 0; i < cars.length; i++) {
  const currentCar = cars[i];

  if (currentCar.alimentazione === 'benzina') {
    benzina.push(currentCar);
  } else if (currentCar.alimentazione === 'diesel') {
    diesel.push(currentCar);
  } else {
    altre.push(currentCar);
  }
}

console.log('benzina', benzina);
console.log('diesel', diesel);
console.log('altre', altre);
