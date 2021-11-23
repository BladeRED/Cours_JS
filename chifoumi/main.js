"use strict";

let chifoumi;
let trace ="Tracage";

function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
};

//Utilisation
//La variable contient un nombre aléatoire compris entre 1 et 10
let playerCheck = 0;
let computerCheck = parseInt(entierAleatoire(1, 3));
console.log(computerCheck);
let computerResult;

do 
{
    chifoumi = prompt("Pierre, Feuille, ou Ciseau ?").toLowerCase();
} while (chifoumi !="pierre" && chifoumi != "feuille" && chifoumi != "ciseau");

//on fait coïncider le choix de Chifoumi avec la variable playerCheck

switch (chifoumi){
    
    case "pierre":
       playerCheck = 1;
       break;
    case "feuille":
        playerCheck = 2;
        break;
    case "ciseau"  :
        playerCheck = 3;
        break;

}
console.log(playerCheck);
//On fait coïncider computerCheck avec la variable computerResult

switch (computerCheck){
    
    case 1:
       computerResult = "pierre";
       break;
    case 2:
        computerResult = "feuille";
        break;
    case 3  :
        computerResult = "ciseau";
        break;

}
console.log(computerResult)

const DIV = document.querySelector("#content");
DIV.innerHTML = `<p> Vous avez choisi ${chifoumi} et l'ordinateur a choisi ${computerResult}. </p>`;


// On compare playerCheck et computerCheck pour donner le résultat
switch (playerCheck){

    case playerCheck = computerCheck:

        DIV.innerHTML += `<p> Egalité parfaite! </p>`;
    
        break;

    case playerCheck < computerCheck:

        DIV.innerHTML += `<p> ${chifoumi} perd contre ${computerResult}. </p>`;
        DIV.innerHTML += `<p> Ah là là, quel erreur du joueur français ! C'est une défaite totale ! </p>`;
        
        break;

    case playerCheck > computerCheck:

        
        DIV.innerHTML += `<p> ${chifoumi} gagne contre ${computerResult}. </p>`;
        DIV.innerHTML += `<p> ET C'EST LA VICTOIIIIIIIIRE ! ! </p>`;
        break;

}

/*if(playerCheck > computerCheck){
    
    DIV.innerHTML += `<p> Vous avez choisi ${chifoumi} et l'ordinateur a choisi ${computerResult}. </p>` 
    DIV.innerHTML += `<p> ${chifoumi} bat ${computerResult}. </p>`
    DIV.innerHTML += `<p> Vous avez gagné ! </p>`

} */

