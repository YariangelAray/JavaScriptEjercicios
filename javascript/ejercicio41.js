
// función para invertir la cadena
const invertirCadena = cadena => {
    let nuevaCadena = ""; //variable donde se guardará la cadena
    for (let i = cadena.length - 1; i >= 0; i--) { //Bucle que itera sobre los elementos de la cadena, desde el ultimo hasta el primero
        nuevaCadena += cadena[i]; // Se van guardando los elementos en la nueva cadena
    }
    return nuevaCadena;
}

// Pedimos que se ingrese una frase
let cadena = prompt("Ingrese una frase: ")
// Guardamos lo que retorna la función
let cadenainvertida = invertirCadena(cadena);
// Mostramos el mensaje
alert(`La cadena invertida es:\n ${cadenainvertida}`);