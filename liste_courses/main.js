"use strict";
let totalCourses;
let listeCourses = ["Poulet", "Jambon", "Fromage", "Yaourt", "Beurre"] ;

console.log("Voici la liste des courses : " );
for (let i = 0 ; i < listeCourses.length ; i++){

console.log(listeCourses[i]);
totalCourses = i+1;

}

console.log ("Il y a " + totalCourses + " trucs à acheter dans votre liste de courses.");