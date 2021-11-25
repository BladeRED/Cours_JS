"use strict";

/*********************
 * FONCTIONS
 *********************/

/**
 * Cacher ou afficher le rectangle
 */
function toggleRectangle() {
  rectangle.classList.toggle("hide");
}

/**
 * Ajoute la classe important sur le rectangle
 */
function becomeRed() {
  rectangle.classList.add("important");
}

/**
 * Ajoute la classe good sur le rectangle
 */
function becomeBeige() {
  rectangle.classList.add("good");
}

/**
 * Supprimes les classes du rectangle
 */
function becomeBlue() {
  rectangle.classList.remove("important", "good");
}

/*********************
 * CODE PRINCIPAL
 *********************/

let rectangle = document.querySelector(".rectangle");
//cibler le bouton #toggle-rectangle -> click -> appelle toggleRectangle
document
  .querySelector("#toggle-rectangle")
  .addEventListener("click", toggleRectangle);

//sur le rectangle -> quand la souris rentre -> becomeRed
rectangle.addEventListener("mouseover", becomeRed);

//sur le rectangle -> au double clic -> becomeBeige
rectangle.addEventListener("dblclick", becomeBeige);

//sur le rectangle -> quand la souris sort -> becomeBlue
rectangle.addEventListener("mouseout", becomeBlue);
