function delayedMessage(message, delay){
    setTimeout(() => {
        console.log(message);
    }, delay);
}
//delayedMessage('Hello', 2000);

function asyncOperation(){
    return new Promise((callback) =>{
        setTimeout(() => {
            callback('operation done');
        }, 2000);
    });
}
// asyncOperation().then((result) => console.log(result));

function fetchData(){
    return new Promise((data) => {
        setTimeout(() => {
            data('data fetched');
        }, 2000);
    });
}
function processData(){
    return new Promise((data) => {
        setTimeout(() => {
            data('data processed');
        }, 2000);
    });
}
function saveData(){
    return new Promise((data) => {
        setTimeout(() => {
            data('data saved');
        }, 2000);
    });
}
//fetchData()
//    .then((data) => processData(data))
//    .then((processed) => saveData(processed))
//    .then((saved) => console.log(saved));

//async function handleData() {
//    const data = await fetchData();
//    const processed = await processData(data);
//    const saved = await saveData(processed);
//    console.log(saved); // Affiche "Données sauvegardées"
//}
//
//handleData();



function fetchData1(fail = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (fail) {
                reject("Erreur lors de la récupération des données");
            } else {
                resolve("Données récupérées");
            }
        }, 1000);
    });
}

// Appel avec gestion des erreurs
fetchData1(true)
    .then((data) => console.log(data))
    .catch((error) => console.error("Erreur :", error));

// Affiche "Erreur : Erreur lors de la récupération des données"

