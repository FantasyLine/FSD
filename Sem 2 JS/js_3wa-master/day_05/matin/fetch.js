
// Ci dessous on déclare une fonction asynchrone
// Pourquoi elle est asynchrone ? Tout simplement car dans cette fonction on utilise fetch
// fetch() est une fonction asynchrone qui effectue une requête HTTP
// Elle prend en paramètre l'url vers laquelle on veut effectuer une requête
// fetch() retourne une promesse
async function afficherFilms() {
    // Ici on stock dans reponse la promesse retourné par fetch("https://jsonplaceholder.typicode.com/posts")
    // On utilise le mot clé await car on veut "forcer" l'attente de la fin de la requête pour être sûr que 
    // reponse sera bien égal au résultat de la requête
    const reponse = await fetch("https://jsonplaceholder.typicode.com/posts");
    // Ci dessous on va parser reponse pour récupérer seulement le json grâce à reponse.json()
    // parser = parcourir un gros objet jusqu'à récupérer ce qui nous intéresse (parsing)
    const films = await reponse.json();

    console.log(films);
  }
  
  afficherFilms();
// const films = afficherFilms();

// console.log(JSON.parse(films));