
// La fonction add prend 2 paramètre
// - a
// - sup
// a est à définir au moment ou l'on execute la fonction
// sup est facultatif car il prend par défaut la valeur 1, si on ne le définit pas, il est égal à 1
function add(a, sup = 1) {
    return a + sup;
}
// Ci dessous on attribue à a la valeur 10, et sup garde sa valeur par défaut (1)
console.log(add(10)); // affiche 11

// Ci dessous on attribue à a la valeur 10, et sup la valeur 0
console.log(add(10, 0)); // affiche 10
