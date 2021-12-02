"use strict";

// VARIABLES //

// tableau de la liste de courses //

    let list = [];


// FONCTIONS //

    // récupère la valeur de l'item //

    function getValue(selector, fct){

        let item = document.querySelector(selector).value.toLowerCase();
        fct(item);
        document.querySelector("form").reset;


    }

    // ajoute un item à la liste de courses //
    function addItem(item){
  
        // On l'insère dans notre tableau //
        list.push(item);
        console.log(list);
        displayList();
       
    };

    // affiche la liste des courses et le nombre d'articles //
    function displayList(){
        
        // On crée une constante qui cible l'ul et on lui injecte les valeurs saisies via boucle //
        const UL = document.querySelector("ul");
        UL.innerHTML = "";
        list.forEach((item) => {
    
                    UL.insertAdjacentHTML("beforeend", `<li>${item}</li>`)
        })
        // On affiche le nombre de courses dans le H2 //

        document.querySelector("h2").textContent="La liste contient " + list.length + " articles."
       
    };

    // supprime tous les articles de la liste de course //
    function deleteItem(){

        list.splice(0, list.length);
        displayList();
        console.log(list)

    }

    function deleteOneItem(item) {
        console.log(list);
      
        // Recherche de l'emplacement (l'indice) du produit spécifié dans la liste de courses.
        let index = list.indexOf(item);
        console.log(index)
      
        // Est-ce que le produit spécifié n'a pas été trouvé ?
        if (index == -1) {
          // Oui, affichage d'une erreur.
          alert("WARNING : Ce produit " + item + " n'est pas dans la liste de courses");
      
          // Fin de la fonction removeItem(), il ne faut pas aller plus loin.
          return;
        }
      
        // Suppression du produit spécifié dans la liste de courses (le tableau diminue de taille).
        list.splice(index, 1);
        displayList();
        toggleSpan();
      }

    function toggleSpan(){

        const POPUP = document.querySelector("#popup");
        POPUP.classList.toggle("hide");


    }

    function closeSpan(){

        const SPAN = document.querySelector("#popup");
        SPAN.classList.add("hide");


    }

// CODE PRINCIPAL //

document
.addEventListener("DOMContentLoaded", function(){

    // On cible le submit pour qu'au clic on enregistre la valeur de l'input dans la liste de courses //
    document.querySelector("#submit").addEventListener("click", function () {
        getValue("#toAdd", addItem);
      });

    // On cible le bouton vider pour qu'au clic on supprime toutes les entrées du tableau //
    document
    .querySelector("#delete")
    .addEventListener("click",function (){getValue("#toDelete", deleteItem)});

    // On cible le bouton vider un seul pour qu'au clic on affiche popup //
    document
    .querySelector("#deleteOne")
    .addEventListener("click", toggleSpan);

     // On cible le span pour qu'au clic on cache popup//
     document
     .querySelector("span")
     .addEventListener("click", toggleSpan);

    // On cible le suppr du span pour qu'au clic on supprime l'entrée choisie //
    document
    .querySelector("#btnDelete")
    .addEventListener("click", function (){getValue("#toDelete", deleteOneItem)});

    console.log(list); });