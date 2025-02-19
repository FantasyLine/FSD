// Ici je définis un timeout de 5 secondes
// La fonction setTimeout prend 2 paramètres
// Le 1er paramètre c'est la fonction de callback
// Le 2ème paramètre c'est le temps d'attente en millisecondes
const myTimeout = setTimeout(myGreeting, 5000); // 5000 ms => 5 secondes

// Ici on fait en sorte d'attendre 5 secondes avant que la fonction myGreeting s'execute
// Fonction de callback (ou de rappel) = C'est une fonction qui va s'exécuter au moment ou elle devra s'exécuter
// Contrairement à une fonction classique
// Si j'execute myGreeting comme ça ça va juste l'exécuter tout de suite
//myGreeting();

function myGreeting() {
  console.log("Happy Birthday!")
}

// On pourrait faire exactement la même chose de cette manière :
// Ici on définit la fonction de callback directement dans les pramètres de setTimeout
const myTimeout2 = setTimeout(function (){
    console.log("Happy Birthday!")
}, 5000);