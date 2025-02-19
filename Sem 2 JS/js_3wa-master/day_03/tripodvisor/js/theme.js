// Je vais placer un écouteur d'évenement au moment ou le DOM sera chargé
document.addEventListener("DOMContentLoaded", init());


// La fonction init c'est la fonction qui va s'exécuter au moment ou le DOM sera chargé
function init() {
    // Ici on récupère la balise <body>
    const body = document.querySelector("body");

    // On récupère le thème sauvegardé
    const theme = localStorage.getItem("theme");

    // Ici on pose une condition qui vérifie si theme est égal à "theme-dark", alors on ajout la 
    // classe theme-dark à la balise <body>, ce qui donnera <body class="theme_dark">
    if (theme === "theme-dark"){
        body.classList.add("theme-dark");
    }
    // Sinon, ça veut dire que le theme n'est pas dark (donc clair), donc on a juste à retirer le 
    // "theme-dark" de la balise <body> 
    else {
        body.classList.remove("theme-dark");
    }
}

// On sait qu'ici on veut pouvoir au clic du bouton "lumière", on veut pouvoir changer la couleur du thème

// 1ère étape : On récupère le bouton qui permet de switcher la couleur du thème
// querySelector() permet de récupérer UN ELEMENT (UN SEUL)
const buttonSwitch = document.querySelector("#theme-switch");

// Une fois que le bouton a été récupéré, on va y placer un écouteur d'évènement
// Cet écouteur d'évènement va écouter l'evenement "click" sur le bouton buttonSwitch
// addEventListener() prend 2 paramètres :
// Le 1er : L'évènement attendu (ici c'est un simple 'clic')
// Le 2ème : La fonction qui va s'exécuter au clic du bouton
buttonSwitch.addEventListener("click", changeTheme);

// Ci dessous, la fonction qui va s'exécuter au clic du bouton buttonSwitch
function changeTheme()
{
    // Pour changer le theme du site, on va ajouter la classe theme-dark à la balise <body>
    // Je vais d'abord récupérer la balise <body>
    const body = document.querySelector("body");

    // Ici je vais manipuler la balise <body>, je vais faire en sorte que à chaque clic :
    // si la classe n'est pas là, la classe theme-dark se rajoute 
    // si la classe est là, la classe theme-dark se retire
    body.classList.toggle("theme-dark");

    // Je rentre dans le if si la classe theme-dark est bien dans la balise <body>
    // pour faire simple, je vérifie si dans <body> il y a class="theme-dark"
    // En gros je vérifie si il y a <body class="theme-dark">
    if (body.classList.contains("theme-dark")) { // Si oui, on rentre dans le if ...
        console.log("Dark mode"); // Simple console.log()
        // On associe à la clé "theme" la valeur "theme-dark"
        localStorage.setItem('theme', 'theme-dark'); // On ajoute au localStorage le theme-dark
    } else { // Sinon ca veut dire qu'on est en mode clair
        console.log("Light mode"); // Simple console.log()
         // On associe à la clé "theme" la valeur "theme-light"
        localStorage.setItem('theme', 'theme-light'); // On ajoute au localStorage le theme-light
    }
}

// On récupère la liste des 3 boutons (green, blue et red) et on les stock dans buttons
const buttons = document.querySelectorAll(".theme-button");
console.log(buttons);

// Ci dessous, je vais boucler sur mes 3 boutons (green, blue et red)
for (let button of buttons) {
    // A chaque tour de boucle, je vais placer un écouteur d'évènement sur mes boutons
    button.addEventListener("click", handleChangeTheme)
}

// Ici on va utiliser l'objet event
// L'objet event est un objet qui permet d'avoir des informations sur l'évènement qui a été déclenché
// Par exemple : Au clic du bouton rouge => et bien grâce à l'objet event on pourra déterminer qui le type d'évènement était un clic, sur quel élément ? => Sur la balise qui correspond au bouton rouge, etc
function handleChangeTheme(event) {
    // event.currentTarget => pointe sur la balise sur laquelle on a cliqué
    console.log(event.currentTarget);
    // Ici l'id de l'attribut sur lequel on a cliqué (soit green, soit blue, ou soit red)
    const themeColor = event.currentTarget.getAttribute("id");
    console.log(themeColor)

    // Une fois qu'on a cliqué sur le bouton dont on veut affecter la couleur, et bien ou aimerait que le thème puisse changer aussi
    // On va d'abord supprimer les classes avant de les ajouter
    document.querySelector("body").classList.remove("theme-green", "theme-red", "theme-blue");
    // Puis on ajoute la classe qu'on veut (theme-green, theme-red, ou theme-blue)
    document.querySelector("body").classList.add(themeColor);
}
