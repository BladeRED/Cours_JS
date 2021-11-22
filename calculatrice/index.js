"use strict";



const tauxTVA = 20 ;

let montantHT;

montantHT = prompt("Veuillez saisir le montant Hors-Taxe, s'il vous plaît") ;

let montantTTC = montantHT * tauxTVA/100;




console.log (`Le montant Hors-Taxe étant de ${montantHT} et le Taux de TVA étant de ${tauxTVA}, le montant TTC est de ${montantTTC}`)