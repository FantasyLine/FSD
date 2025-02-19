        let elInput = document.querySelector('.post');
        let elSubmit = document.querySelector('.submitPost');
        let message = document.querySelector('.message');
        let value = null;

        async function onClick(postNumber) {
            fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${postNumber}`)
            .then((data) => data.json())  // parse 
            .then((posts) => { // posts = tableau
                let totalE = 0; 
                posts.forEach((post) => {
                    let title = post.title;
                    
                    for (let char of title) {
                        if (char === 'e') {
                            totalE++;
                        }
                    }

            });

            message.innerHTML = `<p>Total des 'e' dans tous les titres : <strong>${totalE}</strong></p>
                                    <p>Nombre de posts : <strong>${value}</strong></p>
                                    <p>Moyenne de caractères par post : <strong>${(totalE / value).toFixed(2)}</strong></p>
            `;
            
        })}

        function validOnClick() { // validation de la saisie
            if (value === '' || value <= 0 || value > 100 || value % 1 !== 0) { // aucune valeur vide, float, negatif, supérieur à 100
                message.innerHTML =`Veuillez saisir un nombre entier entre <strong>1 et 100</strong>`;
            } else {
                onClick(value); // fonction 
            }
        }

        elInput.addEventListener('input', () => {
            value = elInput.value;
        });

        elSubmit.addEventListener('click', validOnClick);