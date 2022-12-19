//Inizio

//Chiedere all'utente numero di chilometri che vuole percorrere
const km = prompt ('Quanti chilometri vuoi percorrere?');
console.log("L'utente vuole percorrere chilometri: ", km);

let numberKm = km;
numberKm = parseInt(numberKm);
console.log('Mostra il numero di chilometri:', numberKm);
console.log(typeof numberKm);

//Chiedere all'utente numero di anni che ha
const age = prompt ('Quanti anni hai?');
console.log('Età: ', age);

let numberAge = age;
numberAge = parseInt(numberAge);
console.log('Mostra il numero di anni', numberAge)
console.log(typeof numberAge);

//Definizione del prezzo in base al numero di chilometri indicati dall'utente 
let priceKm = (numberKm * 0.21);
console.log('Il prezzo per i chilometri indicati è', (numberKm * 0.21));

//Definizione prezzo con sconto al 20% 
let discountTwenty = (priceKm / 100) * 20;
console.log('Lo sconto del 20% è di euro ', discountTwenty);

let priceDiscountTwenty = priceKm - discountTwenty;

//Definizione prezzo con sconto al 40% 
let discountFourty = (priceKm / 100) * 40;
console.log('Lo sconto del 40% è di euro ', discountFourty);

let priceDiscountFourty = priceKm - discountFourty;

//Definizione prezzo normale 
let priceNormal = priceKm;

//Istruzioni condizionali
if (numberAge < 18) {
   priceDiscountTwenty;
   document.getElementById('priceDiscountTwenty').innerHTML = (Math.round(priceDiscountTwenty * 100) / 100).toFixed(2);
   console.log('Il prezzo per minorenni è di: ', priceDiscountTwenty);
}
else if (numberAge > 65) {
    priceDiscountFourty;
    document.getElementById('priceDiscountFourty').innerHTML = (Math.round(priceDiscountFourty * 100) / 100).toFixed(2);
    console.log('Il prezzo per over 65 è di: ', priceDiscountFourty);
}
else {
    priceNormal;
    document.getElementById('priceNormal').innerHTML = (Math.round(priceNormal * 100) / 100).toFixed(2);
    console.log('Il prezzo per chi ha tra i 18 e i 64 anni è di: ', priceNormal);
}


















//Fine