"use strict";

/////VARIABLES/////
let star = "      *";
/////FONCTIONS//////

/////CODE PRINCIPAL /////

// Pour que la page soit chargé en dernier //

document.addEventListener("DOMContentLoaded", function () {

    console.log(star)

for (let i = 0; i <6;i++){

star = star.substring(1) + "**"
console.log(star)
}



});
