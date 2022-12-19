# js-biglietto-treno

Esercizio: Calcolo del prezzo del biglietto del treno

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

1. Chiedere all'utente numero di chilometri da percorrere
2. Chiedere all'utente età
4. Verificare prezzo in base ai chilometri indicati:
    - prezzo per Km corrisponde a 0.21 euro * numero Km
    - questo è prezzo per chilometri
5. Definire che utente < 18 anni ha 20% di sconto rispetto al prezzo per chilometri
    - Se utente < 18 anni = prezzo per Km - 20%
6. Definire che utente tra i 18 e i 64 anni ha prezzo per chilometri
    - Se utente < 18 anni = prezzo per Km
7. Definire che utente > 65 anni ha 40% di sconto rispetto al prezzo per chilometri
    - Se utente < 18 anni = prezzo per Km - 20%
    <!-- If, else if, else perchè sono condizioni esclusive -->
8. Output: In HTML deve essere visibile il prezzo fino ai decimali (es. 20,55 euro).

 

