// Función para pedir la cadena de texto
const pedir = () => {
    let regex = /^(\D+\s*)+$/;
    while (true) {
        let cadena = prompt(`Ingrese una cadena de texto: `).trim();
        if (!regex.test(cadena)) alert("ERROR: Ingrese solo letras.");
        else return cadena;
    }
};

// función para quitar las vocales 
const quitarVocales = cadena =>{
    let regex = /[aáeéiíoóuú]/ig; // expresión regular
    return cadena.replace(regex, ""); // metodo para reemplazar
}

// pedimos el texto
let texto = pedir();

//mostramos el resultado.
alert("El resultado de la cadena sin vocales es: \n" + quitarVocales(texto));