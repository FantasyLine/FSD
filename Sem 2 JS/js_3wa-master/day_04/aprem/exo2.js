// Exercice 2 : Transformer un callback en promesse
// Tu as la fonction suivante, qui utilise un callback pour simuler une opération asynchrone :

function asyncOperation2(callback) {
    setTimeout(() => {
        callback("Opération terminée !");
    }, 1000);
}

// Callbacks Hell = Enfer des callbacks

// Exemple attendu :
// Ici je déclare une fonction asyncOperation qui retourne une promesse
function asyncOperation() {
    // Cette fonction retourne une promesse
    // La promesse sera égal au résultat du setTimeout quand il sera terminé
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Opération terminée !");
        }, 1000);
    });
}

asyncOperation().then((result) => console.log(result));

asyncOperation2(() => {
    console.log('Opération terminée 2 !');
});
// Résultat après 1 seconde : "Opération terminée !"
