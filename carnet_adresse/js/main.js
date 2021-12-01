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

// Affiche les contacts//

function displayList() {

    let list = JSON.parse(localStorage.getItem("userlist"));

    if (list === null) list = [];
    
    $("#address-book").html("<ul>");

for (let user of list){
    $("#address-book ul").append(`<li>${user.lastName} ${user.firstName} ${user.phone}</li>`);
}
}


// Enregistre et gère les données saisies par l'utillisateur //

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
        // on change notre tableau en JSON
        let listJSON = JSON.stringify(list);
        console.log(listJSON);
        //on le stocke dans le localStorage
        localStorage.setItem("userlist", listJSON);
        // on récupère le JSON et on le remet en tableau
        let recupJSON = localStorage.getItem("userlist");
        let recupComplexe = JSON.parse(recupJSON);
        console.log(recupJSON, recupComplexe);
        
        // on reset //
        displayList();
        resetForm();
    }

// CODE PRINCIPAL //

$(document).ready(function () {
    displayList();
    form = $("#contact-form");

// Au clic sur le bouton + on appelle la fonction display //

    $("#add-contact").on("click", displayForm);
    console.log(displayForm);

// Au clic sur le bouton enregistrer on sauvegarde les données entrées dans le formulaire dans un tableau de contacts //
//et on affiche les contacts //
    $("#save-contact").on("click", handleForm)
}); 