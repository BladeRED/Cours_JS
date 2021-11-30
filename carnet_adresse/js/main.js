"use strict";

// VARIABLES //

    let form;
    let list = [];
    let user = {};
    
    

// FONCTIONS //

// Petite fonction reset des familles //

    function resetForm(){

        $("#contact-form")[0].reset();

    }

// Affiche ou cache le formulaire

    function displayForm(){

        $("#contact-form").toggle("hide");
        let datamode = form.data("data-mode", "add");
        resetForm();
        
    };



// Enregistre les données saisies par l'utillisateur //

    function handleForm(){

        // données à saisir //
        user.title = $("#title option:selected").text();
        user.lastName = $("#lastName").val().trim();
        user.firstName = $("#firstName").val().trim();
        user.phone = $("#phone").val().trim();
        
        // on l'insére dans le tableau //
        list.push(user);
        console.log(list)
        stockList();
        // on reset //

        resetForm();
    }
    
// Stocke le tableau des données en JSON dans le localStorage //

    function stockList(){

        let listJSON = JSON.stringify(list);
        console.log(listJSON);
        localStorage.setItem("userlist", listJSON);

    }
// CODE PRINCIPAL //

$(document).ready(function () {

    form = $("#contact-form");

// Au clic sur le bouton + on appelle la fonction display //

    $("#add-contact").on("click", displayForm);
    console.log(displayForm);

// Au clic sur le bouton enregistrer on sauvegarde les données entrées dans le formulaire dans un tableau de contacts
    $("#save-contact").on("click", handleForm)
}); 