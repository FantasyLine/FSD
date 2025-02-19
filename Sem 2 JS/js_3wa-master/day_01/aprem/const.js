// On est obligé de donner une valeur à une constante lors de sa définition
// Une constante ne peut être re-définie lorsque c'est une variable simple comme une string par exemple.
const API_KEY = "ABf#123@"; // Ici API_KEY est égal à "ABf#123@", et ce n'est pas censé changer
console.log(API_KEY);

// Ci dessous STUDENTS est un objet JS de type tableau (array)
const STUDENTS = ["Alan", "Bernard", "Jean"];

// Dans le cas d'un objet comme un tableau par exemple, les valeurs du tableau sont modifiables.
// ATTENTION => Modifiable ne veut pas dire ré-assignable
// On ne pourra pas faire const STUDENTS = nouvelle_donnée (ré-assignation)
STUDENTS.push("Sophie"); // nom_tableau.push(element) permet de rajouter un élément au tableau nom_tableau

console.log(STUDENTS) // Affiche (4) ['Alan', 'Bernard', 'Jean', 'Sophie']

STUDENTS.pop(); // nom_tableau.pop() Supprime le dernier élément du tableau nom_tableau

console.log(STUDENTS); // Affiche (3) ['Alan', 'Bernard', 'Jean']

// RE-ASIGNATION
// La ligne ci dessous va me faire une erreur, car je ne peux pas lui donner directement une nouvelle valeur
// Je peux uniquement modifier la constante QUE QUAND C'EST UN OBJET
STUDENTS = ["Alice", "Kévin"];