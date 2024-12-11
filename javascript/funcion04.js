// Función para pedir la palabra
const pedir = () => {
    let regex = /^[A-Za-z]+$/;
    while (true) {
        let palabra = prompt(`Ingrese una palabra: `).trim();
        if (!regex.test(palabra)) alert("ERROR: Ingrese solo letras o una única palabra");
        else return palabra;
    }
};

// pedimos la palabra
let palabra = pedir();


// función para contar el número de silabas 
const silabas = palabra => {
    //([aeiouáéíóú]) => encuentra una vocal
    //(?:[aeiouyáéíóú]?) => Opcionalmente, permite una segunda vocal para formar diptongos. Esto incluyendo y
    // (?![aeiouáéíóú] => asegura que después no haya otra vocal, indicando el final de una sílaba

    regexSilabas = /([aeiouáéíóú])(?:[aeiouyáéíóú]?)(?![aeiouáéíóú])/gi; // expresión regular que busca las vocales, incluyendo casos como diptongo
    let cantSilabas = palabra.match(regexSilabas); //guardamos las coincidencias en un array
    return cantSilabas.length;
}

// mostramos un aviso
alert("Resultado mostrado en consola.");
// mostramos el resultado
console.log("La palabra tiene " + silabas(palabra) + " sílabas.");