"use strict";

//VARIABLES //

let start;
let state = {

play: false,

};
let slides = [

    {image:"1.jpg", legend: " frères panda de Beauval"},
    {image:"2.jpg", legend: "lapin"},
    {image:"3.jpg", legend: "chat"},
    {image:"4.jpg", legend: "dauphin"},
    {image:"5.jpg", legend: "tourterelle"},
    {image:"6.jpg", legend: "ours"},

];

console.log(slides);

// FONCTIONS //

// Affiche ou cache la barre d'outil
function toolBarToggle(){

    console.log("click");
    document.querySelector(".toolbar ul").classList.toggle("hide");

    const ICON = document.querySelector("#toolbar-toggle i");
    ICON.classList.toggle("fa-arrow-right");
    ICON.classList.toggle("fa-arrow-down");

}

// Affiche la photo en cours de visio//
function refreshSlider(){

    let img = document.querySelector("#slider img").src = "images/" + slides[state.index].image;
    let figcaption = document.querySelector("figcaption").textContent = `${slides[state.index].legend}`;

}

//Passe à la photo suivante , reviens à la première photo à la fin de la liste (index: 0)//

function nextSlider(){

//incrémente la propriété index dans le state //

    state.index += 1;
    if (state.index > slides.length-1){
        state.index = 0;
    };

//fait appel à la fonction refreshSlider //
    refreshSlider();

}

//Passe à la photo précédente , reviens à la dernière photo si on dépasse l'index 0 //

function previousSlider(){

    //incrémente la propriété index dans le state //
    
    state.index -= 1;
    if (state.index < 0){
        state.index = slides.length-1;
    };
    
    //fait appel à la fonction refreshSlider //
    refreshSlider();
    
}

// Affiche une photo de manière aléatoire //

function randomSlider(){

    //incrémente la propriété index dans le state //
    let nb = getRndInteger(0, slides.length-1);
        while (nb == state.index){
            nb = getRndInteger(0, slides.length-1);
        }
        state.index = nb;

    //fait appel à la fonction refreshSlider //
    refreshSlider(); 
}

// Lance ou stoppe le diaporama //

function startStopSlider(){

    const PLAY = document.querySelector("#slider-toggle i");
// SI state.play est false, alors on lance l'intervalle, si state.play true on arrête l'intervalle//
    switch(state.play){

        case true : 
            window.clearInterval(start);
            state.play = false;
            PLAY.classList.toggle("fa fa-stop");
            console.log (state.play);
            break;

        case false:

           start = window.setInterval(	
                nextSlider,
                    3000
                );
            state.play = true;
            PLAY.classList.toggle("fa fa-stop");
            console.log (state.play);
            refreshSlider();
            break;
    };

    console.log(state.index)
    
}

// CODE PRINCIPAL //

document
.addEventListener("DOMContentLoaded", function(){

    // Initialisation de l'index du slider //
    state.index = 0;

    // bouton outil pour afficher/cacher les boutons diapo //
    document
    .querySelector("#toolbar-toggle")
    .addEventListener("click", toolBarToggle);
    
    // bouton next //
    document
    .querySelector("#slider-next")
    .addEventListener("click", nextSlider)
    
    // bouton previous //
    document
    .querySelector("#slider-previous")
    .addEventListener("click", previousSlider)
    
    // bouton random //
    document
    .querySelector("#slider-random")
    .addEventListener("click", randomSlider)
   
    // bouton start/stop //
    document
    .querySelector("#slider-toggle")
    .addEventListener("click", startStopSlider)
    
    //fait appel à la fonction refreshSlider //
    refreshSlider();
    
});


