function baz({ a, b }){ 
    // Cette fonction affiche la valeur de a puis la valeur de b comme ça : a b
    console.log(a, b ) 
}

baz({ a: 1, b : 2}); // Affiche 1 2
baz({ b: 1, a : 2}); // Affiche 1 2
