"use strict";

// VARIABLES
let game = {

niveau: 1,
epee: "Bois",
ratioEpee: 0.5,
armure: "Cuivre",
ratioArmure: 1,
pvDragon: getRndInteger(150, 200),
pvChevalier: getRndInteger(200,250),
degatDragon: getRndInteger(10, 20),
degatChevalier: getRndInteger(25,30),

};
//Choix du niveau, arme et armure stocké en chiffres.
let ChoixNiveau = 0;
let ChoixArme = 0;
let ChoixArmure = 0;

//FONCTIONS


  //Cette fonction JavaScript renvoie toujours un nombre aléatoire entre min et max (tous deux inclus) :
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


  function initialiseGame(game){

    do{
        ChoixNiveau = parseInt(prompt("Choisissez votre niveau de difficulté \n 1. Facile - 2. Moyen - 3.Difficile"));
    } while (ChoixNiveau < 1 || ChoixNiveau > 3 || isNaN(ChoixNiveau));
    console.log(ChoixNiveau);

    do{
        ChoixArme = parseInt(prompt("Choisissez votre épée \n 1. Bois - 2. Acier - 3.Excalibur")); 
        } while (ChoixArme < 1 || ChoixArme > 3 || isNaN(ChoixArme));
        console.log(ChoixArme);

    do{
        ChoixArmure = parseInt(prompt("Choisissez votre armure \n 1. Cuivre - 2. Fer - 3.Magique"));
        } while (ChoixArmure < 1 || ChoixArmure > 3 || isNaN(ChoixArmure));
        console.log(ChoixArmure);
  }

  //CODE PRINCIPAL


  // On lance le jeu en appelant la fonction initialise
  let startGame = initialiseGame(game);

  switch (ChoixNiveau){

    case 1: 
    
    game = {

        niveau: 1,
        pvDragon: getRndInteger(150, 200),
        pvChevalier: getRndInteger(200,250),
        degatDragon: getRndInteger(10, 20),
        degatChevalier: getRndInteger(25,30),
        
        };
    break;

    case 2: 
    
    game = {

        niveau: 2,
        pvDragon: getRndInteger(200, 250),
        pvChevalier: getRndInteger(200,250),
        degatDragon: getRndInteger(20, 30),
        degatChevalier: getRndInteger(15,20),  

    };
    break;

    case 3:  game = {

        niveau: 3,
        pvDragon: getRndInteger(200, 250),
        pvChevalier: getRndInteger(150,200),
        degatDragon: getRndInteger(20, 30),
        degatChevalier: getRndInteger(5,10),

    };
    break;


  };
  console.log(game)

  switch (ChoixArme){

    case 1: 
    
    game = {

        ratioEpee: 0.5,
        
        };
    break;

    case 2: 
    
    game = {

        ratioEpee: 1,

    };
    break;

    case 3:  game = {

      ratioEpee: 3,
    };
    break;


  };
  console.log(game)