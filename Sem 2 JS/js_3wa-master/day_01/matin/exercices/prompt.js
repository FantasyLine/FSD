// Ici la valeur de age ne sera pas définit directement dans le code
// La valeur de age sera définit au moment où l'utilistauer va executer le code
let age = prompt("Quel âge avez-vous ?"); // Attend un input de l'utilisateur

if (age < 18) { // Ici on check si age est inferieur à 18
    // Si oui, on rentre dans le if et on fait le console.log suivant
    console.log("Vous etes mineur")
} else { // Sinon, on rentre dans le else si le if précédent n'a pas été respecté
    console.log("Vous etes majeur")
}