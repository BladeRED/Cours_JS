
  //Cette fonction JavaScript renvoie toujours un nombre aléatoire entre min et max (tous deux inclus) :
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  number = getRndInteger(0,2) ;
  console.log(number) ;
