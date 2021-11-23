"use strict";

const table = [
  "lundi",
  "mardi",
  "mercredi",
  "jeudi",
  "vendredi",
  "samedi",
  "dimanche",
];

/***********
 * WHILE
 *  */

console.log("------- WHILE -------");
let index = 0;
while (index < table.length) {
  console.log(table[index]);
  index++;
}

/***********
 * FOR
 *  */
console.log("------- FOR -------");
for (let i = 0; i < table.length; i++) {
  console.log(table[i]);
}

/***********
 * FOR...OF
 *  */
console.log("------- FOR...OF -------");
for (let ligne of table) {
  console.log(ligne);
}

/***********
 * FOREACH
 *  */
console.log("------- FOREACH -------");
table.forEach(function (ligne, index) {
  console.log(ligne);
});
console.log("------- fonction fléchée -------");
table.forEach((ligne, index) => console.log(ligne));
