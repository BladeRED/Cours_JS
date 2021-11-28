"use strict";

////// VARIABLES //////

// On cible l'article avec l'id content dans une variable globale //

    let content = document.querySelector("#content");
    let button;

////// FONCTIONS //////

// fonction qui génère des titres h1 //
    function generateH1(){

        content.innerHTML += `<h1> La patate à Pierre </h1>` ;
        console.log(content);

    }

// fonction qui génère des titres h2 //
    function generateH2(){

        content.innerHTML += `<h2> La patate à Pierre </h2>` ;
        console.log(content);

    }

// fonction qui génère des titres h3 //
    function generateH3(){

        content.innerHTML += `<h3> La patate à Pierre </h3>` ;
        console.log(content);

    }

// fonction qui génère des paragraphes //
    function generateP(){

        content.innerHTML += `<p> La patate à Pierre </p>` ;
        console.log(content);

    }

// fonction qui génère des séparateurs //
function generateHR(){

    content.innerHTML += `<HR> </HR>` ;
    console.log(content);

}

function generateHTML(){

switch (button){

    case button = document.querySelector("#h1"): 

    content.innerHTML += `<h1> La patate à Pierre </h1>` ;
        console.log(button);

    break;
    

    }
}

////// CODE PRINCIPAL //////

// On cible le bouton qui a l'id h1 pour qu'au clic il génère un titre h1 //

    button = document.querySelectorAll("aside button");
    console.log (button);

    for (let index = 0; index < button.length; index++){

        button[index] = document.addEventListener("click", generateHTML)
    };

// On cible le bouton qui a l'id h2 pour qu'au clic il génère un titre h2 //

/*
document
.querySelector("#h2")
.addEventListener("click", generateH2);

// On cible le bouton qui a l'id h3 pour qu'au clic il génère un titre h3 //

document
.querySelector("#h3")
.addEventListener("click", generateH3);

// On cible le bouton qui a l'id p pour qu'au clic il génère un paragraphe //

document
.querySelector("#p")
.addEventListener("click", generateP);

// On cible le bouton qui a l'id hr pour qu'au clic il génère un séparateur //

document
.querySelector("#hr")
.addEventListener("click", generateHR); */