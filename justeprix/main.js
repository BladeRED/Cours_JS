"use strict";

// fonction pour randomiser un chiffre
function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
};
// variables
let player;
let computer = parseInt(entierAleatoire(0, 500));
let message;
let essais = 0;

while (player != computer){

    // Tant que la valeur saisie n'est pas un chiffre, on repose la question
    do {
    player = parseInt(prompt("Choisissez un chiffre entre 0 et 500"));

    //La variable contient un nombre aléatoire compris entre 0 et 500
    } while (isNaN(player)) ;

    
    console.log (player, computer);

     if (player < computer){

        message = "C'est moins !";
        essais += 1;
        console.log(message + " Nombre d'essais:" + essais) ;
        
    } else if (player > computer){ 

        message = "C'est plus !"
        essais += 1;
        console.log(message + " Nombre d'essais:" + essais) ;

    }
} ;

message = "Bravo, vous avez trouvé le juste prix ! " ;
console.log(message + "C'était bien " + computer + " .Il t'aura fallu " + essais + " essais pour y arriver") ;