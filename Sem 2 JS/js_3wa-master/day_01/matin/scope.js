let a = 11

// Ici on déclare une fonction nommée foo()
function foo() {
    // Dans la fonction on ...
    let a = 10; // Déclare une variable a égal à 10 (integer)
    console.log(a); // On affiche 10
  }
// A partir d'ici, on n'est plus dans la fonction  
foo(); // Ici j'éxécute la fonction foo() => Affiche 10
  
// Ici j'aurais une erreur qui dit que a is not defined, tout simpement car a n'a pas été déclaré dans le bloc où je fais le console.log()
console.log(a); // => Affiche 11

