# Calcolo Biglietto Treno

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

- dichiaro una variabile kmUtente e salvo il valore di un prompt;
- dichiaro una variabile etaUtente e salvo il valore di un prompt;
- trasformo i valori ricevuti in valori numerici

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)

- variabile prezzo = calcolo il prezzo totale del biglietto - kmUtente \* 0.21

- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

SE etaUtente < 18
-- sconto del 20% su prezzo
ALTRIMENTI SE etaUtente > (>=) 65
-- sconto del 40% su prezzo

L'output del prezzo finale va messo fuori in forma umana - con massimo due decimali, per indicare centesimi sul prezzo.

- trasformo prezzo in prezzo + 2 decimali

- inserisco nel dom il prezzo
