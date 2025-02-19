let i = 100; // Ici i = 100 dans ce bloc

for (let i = 0; i < 10; i++) { // Ici on redéfinit i dans ce bloc en disant qu'il est égal à 0
  console.log(i); // Compte de 0 à 9
}
// On est de retour dans le bloc de base, donc ici i est toujours égal à 100
console.log(i); // Affiche 100