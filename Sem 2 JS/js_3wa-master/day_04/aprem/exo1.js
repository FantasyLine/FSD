// Correction Exercice 1 : Simuler une opération asynchrone avec setTimeout

function delayedMessage(message, delay) {
    setTimeout(() => {
        console.log(message);
    }, delay);
}

delayedMessage("Bonjour, monde !", 5000);