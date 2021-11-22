"use strict";

let voiture = {

marque:"Lamborgini Diablo IV 5.6 Tdi",
annee: 2016 ,
achat:  new Date("2016-11-23"),
passagers: ["Coco l'Aspicot", "René le Minotaupe"],



};

let options = {weekday :'long', month: 'long', day :'2-digit', year : 'numeric'}

const div = document.querySelector("#content");
div.innerHTML = `<ul>

<li>Marque: ${voiture.marque}</li>
<li>Année de fabrication: ${voiture.annee}</li>
<li>Date d'achat du véhicule: ${voiture.achat.toLocaleString("fr-FR", options)}</li>
<li>Passagers ivres: <ol><li>${voiture.passagers[0]}</li>
<li>${voiture.passagers[1]}</li></ol>  </li>

</ul>`;

