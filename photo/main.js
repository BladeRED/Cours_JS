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

const DIV = document.querySelectorAll("li");

for (let i=0; i < DIV.length; i++){

DIV[i].addEventListener("click",onClickItem);


}
