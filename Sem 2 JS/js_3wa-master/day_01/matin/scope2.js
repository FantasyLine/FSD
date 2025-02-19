// Cette variable est disponible dans tout le code
let b = 11

// Ici on déclare une fonction nommée foo()
function foo() {
    // Dans la fonction on ...
    let a = 10; // Déclare une variable a égal à 10 (integer)
    // Ci dessous, aucune erreur car j'ai bien accès a b, car b est définit dans le bloc parent
    console.log(a + b); // On affiche le résultat de a + b => 10 + 11 = 21
  }
// A partir d'ici, on n'est plus dans la fonction  
foo(); // Ici j'éxécute la fonction foo() => Affiche 21
  
// Ici j'affiche la valeur de b qui est à ma portée
console.log(b); // => 11
// Ici j'aurais une erreur qui dit que a is not defined, tout simpement car a n'a pas été déclaré dans le bloc où je fais le console.log()
console.log(a); // => Erreur

