"use strict";

// VARIABLES //

    let form;
    
// FONCTIONS //

// Charge les données //

    function loadDatas(){

        let datas = JSON.parse(localStorage.getItem("userlist"));

        if (datas === null) datas = [];
        return datas


    }

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

function displayContacts() {

    let list = loadDatas();

    if (list === null) list = [];
    
    $("#address-book").html("<ul>");

    list.forEach((contact, index) => {
    
        $("#address-book ul").append(`<li><a data-index="${index}">${contact.lastName} ${contact.firstName} ${contact.phone}</a></li>`);
    }
    )
}

// Affiche le détail d'un contact //

    function displayDetails(){

        let list = loadDatas();
        let index = this.dataset.index;
        let contact = list[index];
// Affiche le nom et le prénom et le titre en détail //
        $("#contact-details h3").text(`${displayTitle(contact.title)} ${contact.lastName} ${contact.firstName} `);
// Affiche le téléphone //
        $("#contact-details p").text(`${contact.phone}`);
// Stocke l'index dans la balise éditer
        $("#contact-details a").data("index", index);
// Affiche le aside
        $("#contact-details").removeClass("hide");
// Pré-remplit le formulaire //
        editContact(contact)
    }

// Titre à afficher //

    function displayTitle(title){

        let textTitle = "";
        switch(title) {

            case "1":
                textTitle = "Mme."


            break;

            case "2":
                textTitle = "Mlle."

            break;


            case "3":
                textTitle = "Mr."

            break;
        }
        return textTitle;
    }

// Edite le contact

    function editContact(){

// On reprend les infos //
        displayForm();
        let list = loadDatas();
        let index = $("#contact-details a").data("index");
        let contact = list[index]
        console.log(contact);

//Affiche dans le formulaire //

        $("#title option:selected").text(`${contact.title}`);
        $("#lastName").val(`${contact.lastName}`);
        $("#firstName").val(contact.firstName);
        $("#phone").val(contact.phone);

// Cible le formulaire pour le passer en edit, ma gueule ! //

        $("#contact-form").attr("data-mode","edit");
        
    }


// Enregistre et gère les données saisies par l'utillisateur //

    function handleForm(){

        // Nouveau tableau //
        let list = loadDatas();

        if (list === null) list = [];
        // données à saisir //
        let user = {
            title : $("#title option:selected").text(),
            lastName : $("#lastName").val().trim(),
            firstName : $("#firstName").val().trim(),
            phone : $("#phone").val().trim(),
        };
        // on l'insére dans le tableau //
        if ($("#contact-form").data('mode') == "add"){
           list.push(user);
            } else {
               let index = $('#contact-details a').data('index'); 
               list[index] = user;}
       
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
        displayContacts();
        resetForm();
    }

// CODE PRINCIPAL //

$(document).ready(function () {
    displayContacts();
    form = $("#contact-form");

// Au clic sur le bouton + on appelle la fonction display //

    $("#add-contact").on("click", displayForm);
    console.log(displayForm);

// Au clic sur le bouton enregistrer on sauvegarde les données entrées dans le formulaire dans un tableau de contacts //
//et on affiche les contacts //
    $("#save-contact").on("click", handleForm)
    $("#address-book").on("click","li a", displayDetails);
    $("aside a").on("click", editContact)
}); 

    