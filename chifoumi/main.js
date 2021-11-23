"use strict";

let chifoumi;

function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
};

//Utilisation
//La variable contient un nombre aléatoire compris entre 1 et 10
let player = 0;
let computer = parseInt(entierAleatoire(1, 3));
console.log(computer);
let computerResult;

do 
{
    chifoumi = prompt("Pierre, Feuille, ou Ciseau ?").toLowerCase();
} while (chifoumi !="pierre" && chifoumi != "feuille" && chifoumi != "ciseau");

//on fait coïncider le choix de Chifoumi avec la variable player

switch (chifoumi){
    
    case "pierre":
       player = 1;
       break;
    case "feuille":
        player = 2;
        break;
    case "ciseau"  :
        player = 3;
        break;

}
console.log(player);
//On fait coïncider computer avec la variable computerResult

switch (computer){
    
    case computer = 1:
       computerResult = "pierre";
       break;
    case computer = 2:
        computerResult = "feuille";
        break;
    case computer = 3 :
        computerResult = "ciseau";
        break;

}
console.log(computer, computerResult)
// On cible la div HTML et on lui injecte le message de base.

const DIV = document.querySelector("#content");
DIV.innerHTML = `<p> Vous avez choisi ${chifoumi} et l'ordinateur a choisi ${computerResult}. </p>`;


// On compare player et computer pour donner le résultat


if(player == computer){
    
    DIV.innerHTML += `<p> Egalité parfaite! </p>`;

}else{
    
    switch (player){

    case player < computer :

        DIV.innerHTML += `<p> ${chifoumi} perd contre ${computerResult}. </p>`;
        DIV.innerHTML += `<p> Ah là là, quel erreur du joueur français ! C'est une défaite totale ! </p>`;
        
        break;

    case player > computer:

        
        DIV.innerHTML += `<p> ${chifoumi} gagne contre ${computerResult}. </p>`;
        DIV.innerHTML += `<p> ET C'EST LA VICTOIIIIIIIIRE ! ! </p>`;
        break;
    }
 }



