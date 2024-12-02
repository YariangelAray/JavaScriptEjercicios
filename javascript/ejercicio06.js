// Pedimos el nombre
let nombre = prompt("Ingrese su nombre:").toLowerCase();
let genero; // Definimos la variable genero
// Bucle para que se ingrese la variable genero en caso de que ingresen algo diferente a M o F
do {
    genero = prompt("Ingrese su genero (M-F):").toUpperCase().trim();
    if (genero == "M" || genero == "F") break;
    else alert("Debe ingresar solo M o F.")
} while (true);

// Función para determinar el grupo al cual pertenece
const determinarGrupo = (nombre, genero) => {
    // Como las letras tambien tienen un valor "numérico" se puede ver que una letra sea menor que otra
    if ((nombre[0] <= "m" && genero == "F") || (nombre[0] >= "n" && genero == "M")) return "A";
    else return "B";
}

let grupo =  determinarGrupo(nombre, genero);
// Resultado
alert("Pertenece al grupo " + grupo);