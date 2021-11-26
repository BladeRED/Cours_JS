"use strict";

//VARIABLES //

/*let imgObject = {

image = document.querySelector("img src"),
legend = document.querySelector("img alt"),


} */

let state = {

};

let slides = [

{image:"1.jpg", legend: "panda"},
{image:"2.jpg", legend: "lapin"},
{image:"3.jpg", legend: "chat"},
{image:"4.jpg", legend: "dauphin"},
{image:"5.jpg", legend: "tourterelle"},
{image:"6.jpg", legend: "ours"},

];

// FONCTIONS //

function refreshSlider(){

let img = document.querySelector("img src").innerHTML = `${slides[0].image}`;
let figcaption = document.querySelector("figcaption").innerHTML = `${slides[0].legend}`;

}


// CODE PRINCIPAL //

document.addEventListener("DOMContentLoaded", function(){

state.index = 0;
state.launched = false;


    for (let i = 0; i < slides.length; i++){

        console.log(slides[i]);
    }

refreshSlider();


});


