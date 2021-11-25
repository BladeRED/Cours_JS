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

function selectAll(){

    photos.forEach((li) => li.classList.add("selected"));
    let selected = document.querySelectorAll("li.selected");
    document.querySelector("#total em").textContent = selected.length;
    console.log("ca marche");
    
}

function deselectAll(){

    photos.forEach((li) => li.classList.remove("selected"));
    count = 0;
    document.querySelector("#total em").textContent = count;
}

// CODE PRINCIPAL //

const photos = document.querySelectorAll(".photo-list li");
photos.forEach((li) => li.addEventListener("click", selectOne));
let selectButton = document.querySelector("#selectAll").addEventListener("click", selectAll);
let deselectButton = document.querySelector("#deselectAll").addEventListener("click", deselectAll);
