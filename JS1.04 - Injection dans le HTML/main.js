// Déclaration d'une variable.
var firstName;

/*
 * Demande à l'utilisateur de saisir quelque chose dans une popup, lorsque la popup se referme le
 * résultat sera affecté à la variable.
 */
firstName = window.prompt("Comment vous appelez-vous ?");

// Ciblage de la div qui a l'ID "content" dans le html
const DIV = document.querySelector("#content");

//injection de la valeur de la variable dans la balise
DIV.textContent = firstName;

/**
 * On utilise la méthode textContent quand on souhaite seulement ajouter du texte.
 *
 * S'il y avait eu des balises HTML dans l'injection, nous aurions utilisé la méthode innerHTML
 *
 */
