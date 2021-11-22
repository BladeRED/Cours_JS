"use strict";
const TAUX_TVA = 20;

let montantHT;
let tauxTVA;
let montantTTC;

montantHT = prompt("Quel est le montant HT?");
montantHT = parseFloat(montantHT);
console.log(montantHT);

tauxTVA = montantHT*(TAUX_TVA/100);
console.log(tauxTVA);
montantTTC = montantHT + tauxTVA;
console.log(montantTTC);

const HT = document.querySelector("#montantHT");
HT.textContent = montantHT;

const TVA = document.querySelector("#tauxTVA");
TVA.textContent = tauxTVA;

const TTC = document.querySelector("#montantTTC");
TTC.textContent = montantTTC;