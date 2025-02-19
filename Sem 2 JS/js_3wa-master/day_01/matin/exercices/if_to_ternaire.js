let age = 18;
let message = null; // On assgine une valeur directement lorsqu'on créer une variable

// ############### EN IF ############### 
if (age >= 18) {
  message = "Vous êtes majeur.";
} else {
  message = "Vous êtes mineur.";
}

console.log(message);

// ############### EN TERNAIRE ############### 
// Ci dessous l'équivalent de la suite de if au dessus
// Si age est supéreiur ou égal à 18, alors message sera égal à "Vous êtes majeur"
// Sinon, message sera égal à "Vous êtes mineur"
message = age >= 18 ? "Vous êtes majeur" : "Vous êtes mineur";
