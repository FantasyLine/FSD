// Ci dessous erreur car je veux modifier une variable constante
for (const j = 0; j < 10; j = j + 1) {
    console.log(j)
}

// Pour que ca fonctionne :
for (let j = 0; j < 10; j = j + 1) {
    console.log(j)
}
