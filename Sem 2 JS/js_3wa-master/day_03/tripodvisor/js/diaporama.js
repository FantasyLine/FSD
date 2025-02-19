// On stock dans un tableau nos 3 images
const sliderImages =  [
        'ocean.jpg', // 0
        'ski.jpg', // 1
        'city.jpg' // 2
    ];
// currentSlide c'est notre index qui va nous permettre de savoir quelle image on doit afficher
let currentSlide = 0;

// On récupère nos 2 boutons "Suivant" & "Précédent"
const btns = document.querySelectorAll(".slider__btn");
console.log(btns);
// Mon tableau btns contient 2 éléments : 
// - le 1er (index [0] c'est le bouton Précédent)
// - Le 2ème (index [1] c'est le bouton Suivant)
btns[0].addEventListener("click", handlePrevious); // Au clic du bouton précédent
btns[1].addEventListener("click", handleNext); // Au clic du bouton suivant


// Fonction qui se déclenche quand je clique sur Previous
function handlePrevious()
{
    // Si currentSlide est égal à 2 (la derniere image disponible)
    if (currentSlide === 0) {
        // Alors on redémare à 0
        currentSlide = 2
    } else {
        // Sinon on incrément normalement
        currentSlide--; // Je décrémente currentSlide
    }
    // Ici on retire slider__img--current pour faire en sorte qu'aucune image ne s'affiche
    document.querySelector(".slider__img--current").classList.remove('slider__img--current');
    // On pointe sur l'image qu'on veut afficher
    document.querySelectorAll(".slider__img")[currentSlide].classList.add("slider__img--current");
}


// Fonction qui se déclenche quand je clique sur Next
function handleNext()
{
    // Si currentSlide est égal à 2 (la derniere image disponible)
    if (currentSlide === 2) {
        // Alors on redémare à 0
        currentSlide = 0
    } else {
        // Sinon on incrément normalement
        currentSlide++; // J'incrément currentSlide
    }
    // Ici on retire slider__img--current pour faire en sorte qu'aucune image ne s'affiche
    document.querySelector(".slider__img--current").classList.remove('slider__img--current');
    // On pointe sur l'image qu'on veut afficher
    document.querySelectorAll(".slider__img")[currentSlide].classList.add("slider__img--current");
}

// A partir de ca tableau, je vais créer les 3 balises HMTL qui correspondent aux 3 images
// <img class="slider__img slider__img--current" src="img/ocean.jpg" alt="Partir à la plage">
// <img class="slider__img" src="img/ski.jpg" alt="Partir à la montagne">
// <img class="slider__img" src="img/city.jpg" alt="Partir à l'étranger">

for (const image of sliderImages) {
    const img = document.createElement("img"); // Ici on créer une balise img
    img.classList.add("slider__img"); // On ajout la classe slider__img à notre <img>
    img.setAttribute("src", "img/"+image);
    // On a finit de créer la balise <img> et de la paramétrer, on va maintenant la rajouter au code
    document.querySelector(".slider").appendChild(img);

    // Uniquement pour la 1er image qui a la classe .slider__img
    const premierImage = document.querySelector(".slider__img");
    premierImage.classList.add("slider__img--current");

}
