function tdz() {
    console.log(tdz_val); // J'affiche la valeur de tdz_val avant même de l'avoir créer
  
    let tdz_val = "Temporal Dead Zone"; // C'est ici qu'on créer tdz_val et qu'on lui atribue une valeur
  }

// On execute la fonction
tdz();
