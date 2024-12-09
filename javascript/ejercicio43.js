// Expresión regular que permite capturar cadenas que esten entre comillasdobles o comillas escapadas.
let regexp = /"(\\.|[^"\\])*"/g;

// Pedir la cadena
let cadena = prompt("Ingrese una cadena de texto con texto entre comillas.")

// Capturar las coincidencias
let coincidencias = cadena.match(regexp);

// Si el array esta vacio, no muestra coincidencias, de lo contrario, las muestra
alert(coincidencias ? coincidencias.join(`\n`) : "No se hayaron cadenas entre comillas.");