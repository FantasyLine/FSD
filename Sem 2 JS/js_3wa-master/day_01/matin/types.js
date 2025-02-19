// Ici on créer une variable nommée foo, qui a pour valeur le résultat de 1 + "2"
let foo = 1 + "2";
// Etan donné qu'ici on "additionne" un integer avec une String, le résultat de cette opération sera la concaténation de 1 avec 2, le réultat sera donc "12"


console.log(typeof foo) // String

// String : Les Strings (Chaînes de caracteres en français) sont une suite de caractères chainées
let chaine = "Ceci est une chaine de caractères"

// Integer : Les Integers (Nombres entiers) sont tout simplement des nombres sans virgule
let nombre_entier = 20

// Float : Les floats (Flottants, ou nombre à virgule) sont tout simplement des nombres à virgule
let nombre_flottant = 15.99

// Bool : Les Booleans (Booléen en français) est un type binaire, il est soit égal à True, soit à False
let booleen = true



let age_toto = 15

let age_tata = "17"

// parseInt prend en parametre une string et la converti en integer
let resultat = age_toto + parseInt(age_tata)

console.log(resultat)


prenom = "toto"
// Ci dessous, je concatène la string "Bonjour je m'apelle " avec la string prenom avec la string " et j'ai 15 ans"
console.log("Bonjour je m'apelle "+ prenom +" et j'ai " + String(age_toto) + " ans")


// Lorsqu'on créer une variable et qu'on ne veut pas lui attribuer de valeur directement, on lui donne la valeur null pour éviter que la variable soit undefined
let bonjour = null

console.log(bonjour)




// Axel Bourgeois