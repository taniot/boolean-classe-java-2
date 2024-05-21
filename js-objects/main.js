'use strict';
console.log('objects');

const gaetano_array = ['Gaetano', 'Frascolla', 41, true, 'verde', false, 180];
// console.log(gaetano_array);
// [0:'Gaetano', 1:'Frascolla', 2:41, 3:true, 4:'verde', 5:false, 6:180];

const gaetano = {
  nome: 'Gaetano', //chiave + valore = proprietà
  cognome: 'Frascolla',
  eta: 41,
  fame: true,
  colorePreferito: 'verde',
  sete: false,
  altezza: 180,
};

// console.log(gaetano);

gaetano.nome = 'Pippo';
gaetano.amici = ['Edoardo', 'Luca', 'Rosy'];

gaetano['eta'] = 30;
gaetano['prova'] = false;

// console.log(gaetano);

for (let luca in gaetano) {
  console.log(luca);
  console.log(gaetano[luca]);
}

// console.log(Object.keys(gaetano));
// console.log(Object.values(gaetano));
// console.log(Object.entries(gaetano));
