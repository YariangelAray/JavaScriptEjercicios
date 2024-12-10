// Función para pedir la palabra
const pedir = () => {
    let regex = /^[A-Za-z]+$/;
    while (true) {
        let palabra = prompt(`Ingrese una palabra: `).trim();
        if (!regex.test(palabra)) alert("ERROR: Ingrese solo letras o una única palabra");
        else return palabra;
    }
};

// función para invertir la palabra
const invertir = palabra => palabra.split("").reverse().join(""); //El metodo split convierte la palabra en un arreglo, el metodo reverse invierte ese arreglo. El metodo join uno los elementos de ese arreglo.

// pedimos la palabra
let palabra = pedir();

// llamamos a la función
let palabraInversa = invertir(palabra)

// Mostramos el resultado
alert(`La palabra "${palabra}" invertida es: \n${palabraInversa}`)