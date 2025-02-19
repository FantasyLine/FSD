let nb = 61


// Lorsqu'on fait un nombre % (modulo) 2, si le resultat est égal 0, alors c'est pair
if (nb % 2 == 0) {
    console.log("Pair")
} else { // sinon c'est impair
    console.log("Impair")
}

// Ici ou fait une boucle qui va compter i jusqu'a 20
// Ici i est mon compteur qui va s'incrémenter à chaque tour de boucle
for (let i = 0; i <= 20; i++) {
    // A chaque tour de boucle on vérifie si i est pair
    if (i % 2 == 0) { // On rentre dans le if si i est pair
        console.log(`${i} est pair`) // On affiche la valeur de i
    }
    // Il ne se passe rien si i n'est pas pair
}