// setTimeout est une fonction asynchrone qui prend 2 paramètres :
// Le 1er paramètre c'est une fonction de callback
// Le 2ème paramètre c'est le temps d'attentes en millisecondes
setTimeout(print_toto, 3000);

console.log("tata");


function print_toto()
{
    console.log('toto');
}

