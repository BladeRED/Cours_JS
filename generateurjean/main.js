"use strict";

///////////////////////////////////////// VARIABLES ////////////////////////////////////////////

let jean = "Jean";
let randomJean = [
  "Julien",
  "Quentin",
  "Clément",
  "Anouchka",
  "Coraline",
  "Roger",
  "Raoul",
  "André",
  "Michel",
  "Marc",
  "Pierre",
  "Claude",
  "Louis",
  "Bernard",
  "Eude",
  "Massacre",
  "Thomas",
  "Script",
  "Gular",
];

let randomAll = [
  "Hubert",
  "David",
  "Souche",
  "Clélie",
  "Ophéline",
  "Jacques",
  "Pierre",
  "Suzette",
  "Aang",
  "Mashimoto",
  "Cadastre",
  "Victorine",
  "Luc",
  "Dark",
  "Eugène",
  "Jérémie",
  "Gaëtan",
  "Java",
  "Tornado",
];

///////////////////////////////////////// FONCTIONS/////////////////////////////////////////////

//Cette fonction JavaScript renvoie toujours un nombre aléatoire entre min et max (tous deux inclus) :

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomizeJean() {
  let randomize = -1;
  randomize = getRndInteger(0, randomJean.length - 1);
  document.querySelector(
    "#randomJean"
  ).innerHTML = `Jean-${randomJean[randomize]}`;
}

function randomizeAll() {
  let randomizeAll = -1;
  console.log(randomizeAll);
  randomizeAll = getRndInteger(0, randomJean.length - 1);
  console.log(randomizeAll);
  document.querySelector(
    "#randomJean"
  ).innerHTML = `${randomAll[randomizeAll]}-${randomJean[randomizeAll]}`;
}

///////////////////////////////////////// CODE PRINCIPAL ///////////////////////////////////////

// Permet de charger le JS en dernier après le HTML //
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#jean").addEventListener("click", randomizeJean);
  document.querySelector("#jeanAll").addEventListener("click", randomizeAll);
});
