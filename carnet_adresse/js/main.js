"use strict";

// VARIABLES //

    let form;
    
// FONCTIONS //

// Petite fonction reset des familles //

    function resetForm(){

        $("#contact-form")[0].reset();

    }

// Affiche ou cache le formulaire

    function displayForm(){

        $("#contact-form").removeClass("hide");
        let datamode = form.data("data-mode", "add");
        resetForm();
        
    };

// Affiche les données du formulaire //

function displayList() {

    let list = JSON.parse(localStorage.getItem("userlist"));

    if (list === null) list = [];
    
    $("#address-book").html("<ul>");

for (let user of list){
    $("#address-book ul").append(`<li>${user.lastName} ${user.firstName} ${user.phone}</li>`);
}
}


// Enregistre les données saisies par l'utillisateur //

    function handleForm(){

        // Nouveau tableau //
        let list = JSON.parse(localStorage.getItem("userlist"));

        if (list === null) list = [];
        // données à saisir //
        let user = {
            title : $("#title option:selected").text(),
            lastName : $("#lastName").val().trim(),
            firstName : $("#firstName").val().trim(),
            phone : $("#phone").val().trim(),
        };
        // on l'insére dans le tableau //
        list.push(user);
        console.log(list)
        let listJSON = JSON.stringify(list);
        console.log(listJSON);
        localStorage.setItem("userlist", listJSON);
        let recupJSON = localStorage.getItem("userlist");
        let recupComplexe = JSON.parse(recupJSON);
        console.log(recupJSON, recupComplexe);
        
        // on reset //
        displayList();
        resetForm();
    }
    
// Stocke le tableau des données en JSON dans le localStorage //

    function stockList(){

        
        console.log(listJSON);
        localStorage.setItem("userlist", listJSON);

    }

// Récupère le JSON dans le localStorage //

    function recupList(){

        let recupJSON = localStorage.getItem("userlist");
        let recupComplexe = JSON.parse(recupJSON);
        console.log(recupJSON, recupComplexe);

    }

// CODE PRINCIPAL //

$(document).ready(function () {
    displayList();
    form = $("#contact-form");

// Au clic sur le bouton + on appelle la fonction display //

    $("#add-contact").on("click", displayForm);
    console.log(displayForm);

// Au clic sur le bouton enregistrer on sauvegarde les données entrées dans le formulaire dans un tableau de contacts
    $("#save-contact").on("click", handleForm)
}); 