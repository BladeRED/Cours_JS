"use strict";

// VARIABLES //

// On crée un tableau qui contiendra tous les boutons //
const LIST = document.querySelector("#content");
let index =0;
let listConcerts = [

    //Concert 1 //
{ 
    date:"2021/12/05",
    ville:"Clermont-Ferrand",
    chanteur:"Julien Martin",
    prix:"0,50€"
    
},

    //Concert 2 //
{ 
    date:"2021/12/07",
    ville:"Rouen",
    chanteur:"Kylie Minogue",
    prix:"10€"
    
},

    //Concert 3 //
    { 
        date:"2021/12/10",
        ville:"Lyon",
        chanteur:"Madonna",
        prix:"100€"
        
    },
    
    //Concert 4 //
    { 
        date:"2021/12/13",
        ville:"Grenoble",
        chanteur:"Patrick Bruel",
        prix:"120€"
        
    },

    //Concert 5 //
    { 
        date:"2021/12/15",
        ville:"Strasbourg",
        chanteur:"Linkin Park",
        prix:"220€"
        
    },

    //Concert 6 //
    { 
        date:"2021/12/18",
        ville:"Bordeaux",
        chanteur:"ACDC",
        prix:"25€"
        
    },

    //Concert 7 //
    { 
        date:"2021/12/20",
        ville:"Toulouse",
        chanteur:"Skillet",
        prix:"250€"
        
    },

    //Concert 8 //
    { 
        date:"2021/12/22",
        ville:"Saint-Etienne",
        chanteur:"Metallica",
        prix:"50€"
        
    },

    //Concert 9 //
    { 
        date:"2021/12/25",
        ville:"Chez Quentin",
        chanteur:"Julien Froment",
        prix:"500€"
        
    },

    //Concert 10 //
    { 
        date:"2021/12/30",
        ville:"Paris",
        chanteur:"Anoucka Marien",
        prix:"5€"
        
    },

];

// FONCTIONS //

    function afficheContenu(){

        let html = "";
        for (let i = 0 ; i < index+3 ; i++){
        html += `<li> ${listConcerts[i].date} </li>`;
        };
        index +=3;
        LIST.innerHTML = html;
        console.log(listConcerts.slice(0,3));


    }

// CODE PRINCIPALE //

// Pour que la page soit chargé en dernier //
document.addEventListener("DOMContentLoaded", function () {

    console.log(listConcerts)
    document
    .querySelector("button")
    .addEventListener("click", afficheContenu)

});
