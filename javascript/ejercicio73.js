// Función para pedir la frase o la letra
const pedir = (mensaje, regex) => {
    while (true) {
        let resultado = prompt(`Ingrese una ${mensaje}: `).trim();
        if (!regex.test(resultado)) alert(`ERROR: Ingrese una ${mensaje} válida.`);
        else return resultado;
    }
};

// expresiones regulares para validar la frase y la letra
let regexFrase = /^([A-Za-z]+\s*)+$/
let regexLetra = /^[A-Za-z]$/

// pedimos la letra y la frase
let frase = pedir("frase", regexFrase);
let letra = pedir("letra", regexLetra);

// función para buscar las coincidencias 
const buscarLetra = (frase, letra) =>{
    let coincidencias = 0;
    // bucle que itera sobre el número de caracteres de la frase
    for (let i = 0; i < frase.length; i++) {
        // evaluamos si ese caracter es igual a la letra
        if (frase[i].toLowerCase() === letra.toLowerCase()) coincidencias++;
    }
    return coincidencias;
}

let coincidencias = buscarLetra(frase, letra);

// mostramos el resultado
alert(`La letra "${letra}" aparece ${coincidencias} veces en la frase`);