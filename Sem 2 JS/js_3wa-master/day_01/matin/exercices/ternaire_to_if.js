let score = 75;

// ############### EN TERNAIRE ############### 
let result = score >= 50 ? "Réussi" : "Échoué";
console.log(result);

// ############### EN IF ############### 
// Si score est superieur ou égal à 50, alors on rentre dans le if
if (score >= 50) {
    result = "Réussi" // On affecte la string "Réussi"
}else{
    result = "Échoué" // On affecte la string "Échoué"
}

console.log(result)
