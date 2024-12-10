// Función para pedir la palabra
const pedir = () => {
    let regex = /^[A-Za-z]+$/;
    while (true) {
        let palabra = prompt(`Ingrese una palabra: `).trim();
        if (!regex.test(palabra)) alert("ERROR: Ingrese solo letras o una única palabra");
        else return palabra;
    }
};

// función para determinar la longitud de la palabra
const determinarLongitud = palabra => palabra.length < 5 ? "corta" : "larga";

// se guarda la longitud
let longitud = determinarLongitud(pedir());

// se muestra el resultado
alert("La palabra es: " + longitud);