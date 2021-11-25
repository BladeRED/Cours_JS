"use strict";

//FONCTIONS POUR MODIFIER LE RECTANGLE

function displayHideRectangle() {
    let btn = document.querySelector(".rectangle");
    console.log("Tu clique, tu fonctionne")
    btn.classList.toggle("hide");
  }

function onMouseOverRectangle(){

    let rect = document.querySelector(".rectangle");
    console.log ("j'ai faim");
    rect.classList.toggle("important");
    

}

function onMouseClickRectangle(){

    let rect = document.querySelector(".rectangle");
    console.log ("j'ai faim");
    rect.classList.toggle("good");
    

}

function colorOut(){

    let rect = document.querySelector(".rectangle");
    console.log ("j'ai faim");
    rect.classList.remove("important", "good");
    

}
  
  /*****************
   * CODE PRINCIPAL
   *****************/
  const DIV = document.querySelector("#toggle-rectangle").addEventListener("click", displayHideRectangle);
  const DIV2 = document.querySelector(".rectangle").addEventListener("mouseover", onMouseOverRectangle);
  const DIV3 = document.querySelector(".rectangle").addEventListener("mouseout", colorOut);
  const DIV4 = document.querySelector(".rectangle").addEventListener("dblclick", onMouseClickRectangle);
  
  
  


