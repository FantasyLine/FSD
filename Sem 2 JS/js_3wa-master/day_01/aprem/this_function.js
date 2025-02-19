'use strict';


// Ici ma constante o1 est un objet
const o1 = {
    // Ici je créer la propriété nommée prenom qui a pour valeur la string "imed"
    prenom: "imed",
    // Ici je créer la propriété nommée age qui a pour valeur l'integer 22
    age: 22,
    // Ici je créer la propriété nommée ville qui a pour valeur la string "Paris"
    ville: "Paris",
    // Dans l'objet o1 j'ai une propriété nommée f1
    // f1 est un fonction qui retourne le contexte de l'objet
    // Le contexte de l'objet = l'objet lui même
    f1 : function(){
      return "Je suis dans l'objet et le prenom est "+ this;
    }
}

console.log(o1.f1()) ; // Ici j'execute la fonction f1 qui est dans l'objet o1













// const o2 = {
//     f2 : o1.f1
// }

// console.log(o2.f2()) ; // this de o2

// const o3 = o1.f1;

// console.log(o3()) ; // undefined car on n'appelle la fonction f1 explicitement