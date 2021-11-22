"use strict";

//déclaration de la variable

let weekDays = [

"dimanche",
"lundi",
"mardi",
"mercredi",
"judi",
"vendredi",
"samedi",
] ;

console.log (weekDays);

// crée un objet Date

let today = new Date ();

//récupérer le jour de la semaine en cours

let dayIndex = today.getDay();
console.log (weekDays[dayIndex]);

let date = today.getDate();
console.log(date)

let monthNow = [

"Janvier",
"Février",
"Mars",
"Avril",
"Mai",
"Juin",
"Juillet",
"Août",
"Septembre",
"Octobre" ,
"Novembre",
"Décembre" ,
] ;

let month = new Date ("2021/11/23");

let monthIndex = month.getMonth();
console.log (monthNow[monthIndex]);

let year = today.getFullYear();
console.log (year);





