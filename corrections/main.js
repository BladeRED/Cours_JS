"use strict";

/******************
 * VARIABLES
 ******************/
let toto;

/******************
 * FONCTIONS
 * définition de la fonction
 ******************/

//fonction simple
function direCoucou() {
  console.log("coucou");
}

//fonction avec paramètres
function isEven(nb) {
  let result = nb % 2;
  if (result == 1) {
    console.log(nb + " est impair");
  } else {
    console.log(nb + " est pair");
  }
}

//fonction avec paramètres et return
function whatReste(nb, diviseur) {
  let reste = nb % diviseur;
  return reste;
}

/*----- autres syntaxes -----*/

let uneFonction = function () {
  console.log("ok");
};

//fonctions fléchées
let maFonction = () => {
  console.log("fonction fléchée");
};

/******************
 * CODE PRINCIPAL
 ******************/
//appel de la fonction
direCoucou();
// uneFonction();
// maFonction();
isEven(38);
isEven(999);
let result = whatReste(568, 57);

const numbers = [2, 6, 7, 13, 57, 99, 914, 1125];
for (let nb of numbers) {
  isEven(nb);
}

numbers.forEach((nb) => isEven(nb));
numbers.forEach(function (nb) {
  isEven(nb);
});

for (let i = 0; i < numbers.length; i++) {
  isEven(numbers[i]);
}
