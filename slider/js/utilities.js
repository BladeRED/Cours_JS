"use strict";

//FONCTIONS


  //Cette fonction JavaScript renvoie toujours un nombre aléatoire entre min et max (tous deux inclus) :
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

 let number = getRndInteger(0,2) ;


  // Initialisation du jeu
  /*function initialiseGame(game){

    do{
    let askPlayerLevel = prompt("Choisissez votre niveau de difficulté \n 1. Facile - 2. Moyen - 3.Difficile");
    } while (isNaN(askPlayerLevel && askPlayerLevel < 1 && askPlayerLevel >3));
} */
