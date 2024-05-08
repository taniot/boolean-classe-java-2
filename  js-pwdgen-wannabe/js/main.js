'use strict';

/*
# Password Generator

- Chiedi all’utente il suo nome
- Poi chiedi il suo cognome
- poi chiedi il suo colore preferito
  Infine scrivi sulla console nomecognomecolorepreferito21

*/

const valoreDaAggiungere = '21';
// const nomeUtente = prompt('Inserisci il tuo nome');
// const cognomeUtente = prompt('Inserisci il tuo cognome');
// const colorePreferitoUtente = prompt('Inserisci il tuo colore preferito');

const password =
  nomeUtente + cognomeUtente + colorePreferitoUtente + valoreDaAggiungere;

const passwordTemplateLiteral = `La tua password è ${password}`;

const elementPassword = document.getElementById('password-output');
elementPassword.innerHTML = password;

// document.getElementById('password-output').innerHTML = password;

console.log(passwordTemplateLiteral);
