"use strict";

let count = 0;

// FONCTIONS //

function selectOne() {

    
    let selected = document.querySelectorAll("li.selected");
    this.classlist.toggle("selected");
    document.querySelector("#total em").textContent = selected.length;

}

// CODE PRINCIPAL //

const photos = document.querySelectorAll(".photo-list li");
photos.forEach((li) => li.addEventListener("click", selectOne));

