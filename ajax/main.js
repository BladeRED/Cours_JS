"use strict";

// VARIABLES //



// FONCTIONS //

    function displayJSON(JSONDatas){

        $("#target").html(`<ul></ul>`);

        JSONDatas.forEach(element => {
            $("#target ul").append(`<li><strong> Prénom : ${element.firstName} </strong><br> <em>Téléphone : ${element.phone}</li></em>`);
        })
        
    }

    function displayFilmJSON (jsonDatas){
        $("#target").html(`<ul class="movie-list"></ul>`)
        jsonDatas.forEach(element => {
            $("#target ul").append(`<li>
            <img src="images/${element.cover}">
            <p>
            <strong>${element.title} </strong> -  <em>${element.duration}</em></p></li>`);
        });
}


    function displayHTML(htmlDatas){

        $("#target").html(htmlDatas);

    }

    function onClickExecute(){

        let input = $('input[name="what"]:checked').val();
        switch(input) {

            case "1":

                $.get("data/1-get-html-article.html", displayHTML)
                console.log("HTML")


            break;

            case "2":
                let bidule = $.getJSON("data/2-get-contacts-list.json", displayJSON)
                console.log(bidule)

            break;


            case "3":
                $.get("data/3-get-html-movies.html", displayHTML)
                console.log("FILM")

            break;

            case "4":

                $.getJSON("data/4-get-json-movies.json", displayFilmJSON);
                console.log("FILM JSON")

            break;
        }

    }

// CODE PRINCIPAL //

$(document).ready(function () {

// Au clic on récupère la valeur dans onClickExecute //

$("#run").on("click", onClickExecute);

});