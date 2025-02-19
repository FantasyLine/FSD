// Ici on créer une classe nommée Model
class Model {
    // Dans ma classe Model, j'ai une méthode nommée get()
    get() {
      return "table";
    }
  }
  
// Création d'un instance (objet)
const myModel = new Model();
// json = javascriptObjectNotation 
// Affiche "table"
console.log(myModel.get())
// console.log(myModel)

// Ici now est un objet, c'est une instance de la classe Date
const now = new Date();

// Ici je créer un tableau avec les valeurs 1, 2 et 3
let notes = [1, 2, 3];
// Ici je créer exactement le meme tableau avec les valeurs 1, 2 et 3 mais d'une manière différente
let newNotes = new Array(1, 2, 4);

console.log(notes)
console.log(newNotes)


// création d'un Map
const store = new Map();

store.set("A1", 10.6);
store.set("A2", 8.9);

console.log(store);
// {"A1" => 10.6, "A2" => 8.9}

// Set permet de créer des collections sans doublons
const ensemble = new Set([1, 2, 3, 4, 5, 5]);
console.log(ensemble);
// [1, 2, 3, 4, 5] il n'y a pas de doublon