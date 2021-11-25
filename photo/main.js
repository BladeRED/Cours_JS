"use strict";

let count = 0;

// FONCTIONS //

function selectOne() {

    this.classList.toggle("selected");
    if(this.classList.contains("selected")) {

        count++

    }else{count--}
    document.querySelector("#total em").textContent = count;

}

// CODE PRINCIPAL //

const photos = document.querySelectorAll(".photo-list li");
photos.forEach((li) => li.addEventListener("click", selectOne));

