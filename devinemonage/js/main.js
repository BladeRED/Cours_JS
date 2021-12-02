"use strict";
//let datas;
function getAgify() {
  let input = document.querySelector("#firstname").value;
  if (input != "") {
    fetch(`https://api.agify.io/?name=${input}`)
      .then((Response) => Response.json())
      .then((datas) => displayHTML(datas))
      .catch((error) => alert("erreur : " + error));
  }
}

function displayHTML(input) {
  document.querySelector("article").classList.remove("hide");
  document.querySelector(
    "article h2"
  ).innerHTML = `D'après Agify, avec le prénom ${input.name}, tu as ${input.age} ans.`;

  document.querySelector("article p strong").innerHTML = `${input.count}`;
}

document.querySelector("#submit").addEventListener("click", getAgify);
