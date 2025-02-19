// ############################## AVANT ##############################
// Javascript est un langage peu typé
// Cette fonction sayHello() AFFICHE une phrase de bienvenue, mais elle n'est égal à rien
function sayHello1(prenom) {
    console.log(`Hello ${prenom}`);
}
// Donc lorsque je vais exécuter cette fonction, ça va juste m'afficher la phrase
sayHello1("lydia"); // Affiche Hello lydia
const phrase3 = sayHello1("Ryan"); // undefined
console.log(typeof phrase3); // Affiche undefined

// ############################## APRES ##############################

// Cette fonction sayHello() RETOURNE une phrase de bienvenue
function sayHello(prenom) {
    return `Hello ${prenom}`;
}

const phrase2 = sayHello("lydia"); // est égal a 'Hello lydia', mais on n'affiche rien ici
const phrase = sayHello("Ryan"); // est égal a 'Hello Ryan', mais on n'affiche rien ici
console.log(phrase); // Ici on affiche 'Hello Ryan'
console.log(phrase2); // Ici on affiche 'Hello lydia'