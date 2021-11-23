"use strict";
const TAUX_TVA = 20;

let montantHT;
let tauxTVA;
let montantTTC;
let tauxRemise;
let totalRemise;

montantHT = prompt("Quel est le montant HT?");
montantHT = parseFloat(montantHT);
console.log(montantHT);
tauxTVA = montantHT*(TAUX_TVA/100);
montantTTC = montantHT + tauxTVA;
const DIV = document.querySelector("#content");

let remise = prompt("Avez-vous une remise ?");

if(remise == "oui" || remise == "yes") {
    
    tauxRemise = parseFloat(prompt("Quel est le taux de la remise?"))
    totalRemise = montantHT*(tauxRemise/100);
    montantHT = montantHT - totalRemise;
    

    DIV.innerHTML += `<p> Pour un montant HT de ${montantHT}€, il y a ${tauxTVA}€ de TVA. Le montant TTC est de ${montantTTC}€. Une remise de ${tauxRemise}% équivalent à ${totalRemise}€ a été appliquée. </p>` ;

}else{


    console.log(tauxTVA);
    console.log(montantTTC);
    DIV.innerHTML += `<p> Pour un montant HT de ${montantHT}€, il y a ${tauxTVA}€ de TVA. Le montant TTC est de ${montantTTC}€. </p>`
    DIV.innerHTML += `<p> Aucune remise n'a été appliquée.</p>` ;

};












