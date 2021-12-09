"use strict";


///////////////////////////////////////// VARIABLES ////////////////////////////////////////////



///////////////////////////////////////// FONCTIONS/////////////////////////////////////////////



///////////////////////////////////////// CODE PRINCIPAL /////////////////////////////////////////////


// Si i est divisible par 3 et 5, on affiche fizz buzz, sinon si i est divisible uniquement par 3, fizz, sinon si i est divisible uniquement par 5,buzz, et dans tous les autres cas on affiche le chiffre. //
for (let i = 0; i < 300; i++){

  if (i%3 == 0 && i%5 == 0){

    console.log(i + " fait fizz buzz !")

  }else if (i%3 == 0){

    console.log(i + " fait fizz !")

  }else if (i%5 == 0){

    console.log(i + " fait buzz !")

  }else{console.log(i);}
}