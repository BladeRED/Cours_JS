"use strict";


let total = 0;

//FONCTIONS POUR BIDOUILLER LES PHOTOS

function onClickItem(){

    total += 1;

let rendu = document.querySelector("#total em").innerHTML = `${total}`;
let select = document.querySelector(".photo-list");
select.classList.toggle("selected");

console.log ("Il y a "+ total + " photos séléctionnés");

};

const DIV = document.querySelector(".photo-list").addEventListener("click",onClickItem);
