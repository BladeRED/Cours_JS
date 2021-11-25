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

    const DIV = document.querySelector("#game");
    let fight;
    game.gameTurn = 1;
    game.rollDiceKnight = getRndInteger(0,100);
    game.rollDiceDragon = getRndInteger(0,100);
    console.log(game.rollDiceKnight, game.rollDiceDragon)
  
    while (game.hpDragon > 0 && game.hpKnight > 0) {


        if (game.rollDiceKnight == game.rollDiceDragon){
 
            DIV.innerHTML += `<h2> -----Tour ${game.gameTurn} : -----</h2>`;
            DIV.innerHTML += `<p>Vous lancez les dés pour obtenir l'initiative... ${game.rollDiceKnight} !</p>`;
            DIV.innerHTML += `<p>Quant au dragon... ${game.rollDiceDragon} ! </p>`;
            DIV.innerHTML += `<p>Vous frappez en même temps que le dragon. Aucun dégât n'est appliqué.</p>`;
            DIV.innerHTML += `<p> HP du Dragon: ${ game.hpDragon} HP / HP du Chevalier: ${game.hpKnight} HP</p>`;
            game.gameTurn += 1;

        }else if(game.rollDiceKnight < game.rollDiceDragon){

            DIV.innerHTML += `<h2> -----Tour ${game.gameTurn} : -----</h2>`;
            DIV.innerHTML += `<p>Vous lancez les dés pour obtenir l'initiative... ${game.rollDiceKnight} !</p>`;
            DIV.innerHTML += `<p>Quant au dragon... ${game.rollDiceDragon} ! </p>`;
            DIV.innerHTML += `<p>Le dragon est plus rapide. Il vous brûle avec ses flammes brûlantes qui brûle.</p>`;
            fight = fightTurnByTurn(game.difficulty);
            game.hpKnight -= game.dmgDragon*game.ratioArmor;
            DIV.innerHTML += `<p> HP du Dragon: ${ game.hpDragon} HP / HP du Chevalier: ${game.hpKnight} HP</p>`;
            game.gameTurn += 1;
            

        }else if(game.rollDiceKnight > game.rollDiceDragon){

            DIV.innerHTML += `<h2> -----Tour ${game.gameTurn} : -----</h2>`;
            DIV.innerHTML += `<p>Vous lancez les dés pour obtenir l'initiative... ${game.rollDiceKnight} !</p>`;
            DIV.innerHTML += `<p>Quant au dragon... ${game.rollDiceDragon} ! </p>`;
            DIV.innerHTML += `<p> Votre vitesse éblouit le dragon qui se prend une petite avoine maison.</p>`;
            fight = fightTurnByTurn(game.difficulty);
            game.hpDragon -= game.dmgKnight*game.ratioSword;
            DIV.innerHTML += `<p> HP du Dragon: ${ game.hpDragon} HP / HP du Chevalier: ${game.hpKnight} HP</p>`;
            game.gameTurn += 1;
            

        }
        game.rollDiceKnight = getRndInteger(0,100);
        game.rollDiceDragon = getRndInteger(0,100);

    }

    if (game.hpDragon <= 0){

        DIV.innerHTML += `<h1> Vous triomphez du vil lézard et buvez une bière sur son cadavre.</h1>
        <img src="img/knight.gif"/>`;
        

    } else if (game.hpKnight <= 0){

        DIV.innerHTML +=`<h1> Vous vous êtes fait snacké comme une crevette sur la plancha d'un Nicois</h1>
        <img src="img/dragon.gif"/>`;
       

    }