"use strict";

// VARIABLES //

// tableau de la liste de courses //

    let list = [];


// FONCTIONS //

    // ajoute un item à la liste de courses //
    function addItem(){

        // On cible l'input texte où la valeur est saisie //
        let item = document.querySelector("#toAdd").value.trim();
        // On l'insère dans notre tableau //
        list.push(item);
        console.log(list);
        displayList();
       
    };

    // affiche la liste des courses et le nombre d'articles //
    function displayList(){

        let item = document.querySelector("#toAdd").value.trim();
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

    function deleteOneItem(){

        let item = document.querySelector("#toAdd").value.trim();
        list.splice(item, 1);
        displayList();
        console.log(list)

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
    document
    .querySelector("#submit")
    .addEventListener("click", addItem);

    // On cible le bouton vider pour qu'au clic on supprime toutes les entrées du tableau //
    document
    .querySelector("#delete")
    .addEventListener("click", deleteItem);

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
    .addEventListener("click", deleteOneItem);

    console.log(list); });