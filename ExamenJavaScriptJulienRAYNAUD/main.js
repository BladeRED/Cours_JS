///////////////////////////////////////// CECI EST LE CODE DE JULIEN RAYNAUD ///////////////////////////////////////////////////

"use strict";

/////////// VARIABLES ///////////////////////////

// On cible la balise qui va afficher les plats //

const PLATS = document.querySelector("#meals");

// Le tableau contenant nos plats //

let listePlats = [
  "pizza",
  "quiche au thon",
  "lasagnes",
  "ramens",
  "sushis",
  "onigiris",
  "kebab",
  "sandwich",
  "raclette",
  "fondue savoyarde",
];

////////////////// FONCTIONS ///////////////////////

// Fonction qui va afficher nos plats sur la page //

function affichePlats(nourriture) {

  // On affiche en HTML le nombre de plats qu'il y a dans le tableau des plats, et on crée un ul pour les insérer après //

  PLATS.innerHTML = `<h2> Il y a  ${listePlats.length}  plats au menu du jour:`;
  PLATS.innerHTML += `<ul></ul>`;

  // Boucle qui permet d'afficher tous les plats du tableau en HTML, via parcours du tableau avec for, comme les noms sont en minuscules, on change la première lettre en majuscule pour une meilleure présentation  //

  for (let i = 0; i < listePlats.length; i++) {
    let menu = document.querySelector("#meals ul");
    menu.innerHTML += `<li>${
      listePlats[i].charAt(listePlats[i]).toUpperCase() + listePlats[i].slice(1)
    }</li>`;
  }
}

// Fonction qui va ajouter des plats via l'input de la page //

function ajoutePlats() {

  // On crée un variable qui va vérifier qu'un plat saisie par l'utilisateur est dans la liste des plats //

  let nourriture = document.querySelector("#prompt").value.toLowerCase().trim();
  let index = listePlats.indexOf(nourriture);

  // Si on ne saisit rien, alors on affiche un message demandant à l'utilisateur de recommencer sa saisie //
  // Si le plat se trouve dans la liste des plats (index différent de -1), alors on affiche un message demandant à l'utilisateur de recommencer sa saisie également //
  // Dans le cas où il n'y est pas (index égale à -1), on ajoute notre plat à la liste des plats, et on l'affiche sur notre page //

  if (index === "") {
    let message = alert(
      " 😕 Vous n'avez indiqué aucun plat! Veuillez saisir un plat s'il vous plaît 😕!"
    );
  } else if (index != -1) {
    let message = alert(
      " 😁 Le plat " +
        listePlats[index] +
        " est déjà au menu ! Veuillez saisir un autre plat, s'il vous plaît 😁!"
    );
  } else if (index == -1) {
    listePlats.push(nourriture);
    affichePlats();
    let message = alert(" 😀 Votre plat a bien été ajouté 😀!");
  }

  document.querySelector("form").reset;
}

/////////// CODE PRINCIPALE /////////////////

// Pour que la page soit chargé en dernier //

document.addEventListener("DOMContentLoaded", function () {
    
  // Affichage des plats enregistrés dans le tableau, avec le nombre total de plats indiqués //

  affichePlats();

  // On cible la balise à l'id submit pour qu'au clic on appelle la fonction qui gère l'ajout des plats dans la liste des plats //

  document.querySelector("#submit").addEventListener("click", ajoutePlats);
});
