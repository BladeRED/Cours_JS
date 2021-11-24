"use strict";

// VARIABLES
let game = {

}; 
let message;

//Choix du niveau, arme et armure stocké en chiffres.


//FONCTIONS


  //Cette fonction JavaScript renvoie toujours un nombre aléatoire entre min et max (tous deux inclus) :
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

//Initialise le jeu en récoltant toutes les données nécessaires:
  function initialiseGame(game){

    do{
        game.difficulty = parseInt(prompt("Choisissez votre niveau de difficulté \n 1. Facile - 2. Moyen - 3.Difficile"));
    } while (game.difficulty < 1 || game.difficulty > 3 || isNaN(game.difficulty));
    console.log(game.difficulty);

    do{
        game.weapon = parseInt(prompt("Choisissez votre épée \n 1. Bois - 2. Acier - 3.Excalibur")); 
        } while (game.weapon < 1 || game.weapon > 3 || isNaN(game.weapon));
        console.log(game.weapon);

    do{
        game.armor = parseInt(prompt("Choisissez votre armure \n 1. Cuivre - 2. Fer - 3.Magique"));
        } while (game.armor < 1 || game.armor > 3 || isNaN(game.armor));
        console.log(game.armor);
  }

  //Fonction lançant le combat au tour par tour:


  function fightTurnByTurn(){

    switch(game.difficulty){

        case 1:
            game.dmgDragon = getRndInteger(10, 20);
            game.dmgKnight = getRndInteger(25,30);
        break;


        case 2:
            game.dmgDragon = getRndInteger(20, 30);
            game.dmgKnight = getRndInteger(15,20); 

        break;


        case 3:
            game.dmgDragon = getRndInteger(20, 30);
            game.dmgKnight = getRndInteger(5,10);

        break;

    }

  }

  //CODE PRINCIPAL


  // On lance le jeu en appelant la fonction initialise
  let startGame = initialiseGame(game);


  /*let InitDifficulty = dataGame(game.difficulty) */

  switch (game.difficulty){

    case 1: 
    
        game.hpDragon = getRndInteger(150, 200);
        game.hpKnight = getRndInteger(200,250);
        

    break;

    case 2: 
    
        game.hpDragon = getRndInteger(200, 250);
        game.hpKnight = getRndInteger(200,250);


    break;

    case 3:  

        game.hpDragon = getRndInteger(200, 250);
        game.hpKnight = getRndInteger(150,200);


    break;
    console.log(game)

  };

  switch (game.weapon){

    case 1: 

        game.ratioSword = 0.5;

    break;

    case 2: 

        game.ratioSword = 1;

    break;

    case 3:  

      game.ratioSword = 1.5;
    
    break;

    console.log(game)

  };

  switch (game.armor){

    case 1: 
    
        game.ratioArmor = 1;

    break;

    case 2: 
    
        game.ratioArmor = 0.75;

    break;

    case 3: 

      game.ratioArmor = 0.5;

    break;


  };
    console.log(game)

    //FIGHT !

    const DIV = document.querySelector("#game").innerHTML
    let fight;
    game.gameTurn = 0;
    game.rollDiceKnight = getRndInteger(0,100);
    game.rollDiceDragon = getRndInteger(0,100);
    console.log(game.rollDiceKnight, game.rollDiceDragon)
  
    while (game.hpDragon > 0 && game.hpKnight > 0) {


        if (game.rollDiceKnight == game.rollDiceDragon){
            console.log("Vous lancez les dés pour obtenir l'initiative..."+ game.rollDiceKnight + " !" + "Quant au dragon..." + game.rollDiceDragon + " !");
            message = "Vous frappez en même temps que le dragon. Aucun dégât n'est appliqué.";
            game.gameTurn += 1;
            console.log("Tour "+ game.gameTurn +": " + message + " HP du Dragon: " + game.hpDragon + " HP / HP du Chevalier: " + game.hpKnight + " HP");
            

        }else if(game.rollDiceKnight < game.rollDiceDragon){
            console.log("Vous lancez les dés pour obtenir l'initiative..."+ game.rollDiceKnight + " !" + "Quant au dragon..." + game.rollDiceDragon + " !");
            message = "Le dragon est plus rapide. Il vous brûle avec ses flammes brûlantes qui brûle.";
            fight = fightTurnByTurn(game.difficulty);
            game.hpKnight -= game.dmgDragon*game.ratioArmor;
            game.gameTurn += 1;
            console.log("Tour "+ game.gameTurn +": " + message + " HP du Dragon: " + game.hpDragon + " HP / HP du Chevalier: " + game.hpKnight + " HP");

        }else if(game.rollDiceKnight > game.rollDiceDragon){
            console.log("Vous lancez les dés pour obtenir l'initiative..."+ game.rollDiceKnight + " !" + "Quant au dragon..." + game.rollDiceDragon + " !");
            message = "Votre vitesse éblouit le dragon qui se prend une petite avoine maison.";
            fight = fightTurnByTurn(game.difficulty);
            game.hpDragon -= game.dmgKnight*game.ratioSword;
            game.gameTurn += 1;
            console.log("Tour "+ game.gameTurn +": " + message + " HP du Dragon: " + game.hpDragon + " HP / HP du Chevalier: " + game.hpKnight + " HP");

        }
        game.rollDiceKnight = getRndInteger(0,100);
        game.rollDiceDragon = getRndInteger(0,100);

    }

    if (game.hpDragon <= 0){

        message = "Vous triomphez du vil lézard et buvez une bière sur son cadavre.";
        console.log(message);

    } else if (game.hpKnight <= 0){

        message = "Vous vous êtes fait snacké comme une crevette sur la plancha d'un Nicois.";
        console.log(message);

    }