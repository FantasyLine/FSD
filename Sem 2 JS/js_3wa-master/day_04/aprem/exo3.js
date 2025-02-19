// Exercice 3 : Enchaînement de Promises
// Crée trois fonctions qui retournent des promesses :

// fetchData : résout avec la chaîne "Données récupérées" après 1 seconde.
// processData : prend une donnée en paramètre, résout avec "Données traitées" après 1 seconde.
// saveData : prend une donnée en paramètre, résout avec "Données sauvegardées" après 1 seconde.

// Ma fonction fetchData retourne une promesse
// Promesse = L'objet Promise (pour « promesse ») est utilisé pour réaliser des traitements de façon 
// asynchrone. Une promesse représente une valeur qui peut être disponible maintenant, 
// dans le futur voire jamais.
function fetchData() {
    // On retourne la promesse
    return new Promise((resolve) => { // resolve : une fonction utilisée pour indiquer que la promesse a réussi
        // On rentre ici quand la promesse s'est bien passé
        setTimeout(() => {
            // resolve c'est le "return" d'une promesse
            resolve("Données récupérées");
        }, 1000);
    });
}
// Donc fetchData() retourne une promesse dans 1 second egal à "Données récupérées"
// const promesse1 = fetchData();
// console.log(typeof promesse1);

function processData(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${data} -> Données traitées`)
        }, 1000);
    });
}

function saveData(processedData) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${processedData} -> Données sauvegardées`)
        }, 1000);
    });
}

fetchData()// Ici j'apelle la fonction fetchdata() qui retourne une promesse au bout d'1 seconde
// Quand la promesse de fetchData() sera résolue (après 1 seconde), le retour de la promesse "Données 
// récupérées" sera envoyé en parammètre du processData(data) suivant.
    .then((data) => processData(data)) // Donc le data ici est égal à "Données récupérées"
     // Ici la promesse processData(data)a retourné "Données récupérées -> Données traitées"
    .then((processed) => saveData(processed)) // Ici processed est égal à  "Données récupérées -> Données traitées"
    // La dernière promesse a retourné "Données récupérées -> Données traitées -> Données sauvegardées"
    .then((saved) => console.log(saved)); // Ici saved est égal à "Données récupérées -> Données traitées -> Données sauvegardées" et on l'affiche grâce à console.log

// Affiche "Données récupérées -> Données traitées -> Données sauvegardées"