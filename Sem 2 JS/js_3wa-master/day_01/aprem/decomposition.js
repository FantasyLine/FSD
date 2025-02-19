// Cette fonction retourne le résultat de x + y + z
function sum(x, y, z) {
    return x + y + z;
}

let numbers = [1, 2, 3];
// Le ...numbers ci dessous, va mettre tous les integers du tableau numbers dans les paramètres de sum()
console.log(sum(...numbers)); // sum(1, 2, 3) unpacking
// EQUIVALENT DE ...
console.log(sum(numbers[0], numbers[1], numbers[2])); // sum(1, 2, 3) unpacking
// EQUIVALENT DE ...
console.log(sum(1, 2, 3)); // sum(1, 2, 3) unpacking
