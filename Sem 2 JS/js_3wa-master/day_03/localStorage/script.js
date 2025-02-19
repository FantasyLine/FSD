const button = document.querySelector("#button");

button.addEventListener("click", function() {
    console.log("click");
})

const objet = {
    prenom : "imed",
    ville : "Paris",
    pays : "France",
    cp : 75000
}

// Le localstorage c'est une sorte d'objet mais stockés dans le navigateur

// Pour insérer une données dans le localstorage
localStorage.setItem('prenom', 'imed');

console.log(localStorage.getItem('prenom'));