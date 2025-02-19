let a = 1;

function calcul() {
  let a = 2 + a; // Le fait de rajouter le + a ici, créer une erreur de syntaxe
  // En effet javascript pense que ce 'a' fait reference au 'a' de la même ligne, alors qu'en réalité on veut utiliser le 'a' du bloc parent (ligne 1)

  console.log(a, "calcul");

  function sub_calcul() {
    let b = a + 1;

    console.log(b, "sub_calcul");
  }

  sub_calcul();
}

calcul();
