// Se guarda la constante de bonificación
const bonificacion = 2400;

let puntos;
let regexPuntos = /^0.(0|4|[6-9])$/;

// Función para saber el nivel de acuerdo a los puntajes
const determinarNivel = puntos => {
    if (puntos == 0.0) return "Inaceptable";
    else if (puntos == 0.4) return "Aceptable";
    else return "Meritorio";
}

// Válidamos que los datos ingresados sean correctos
while (true) {
    puntos = prompt("Ingrese sus puntos:");
    if (regexPuntos.test(puntos) || parseInt(puntos) > 1) break;
    else alert("ERROR: Ingrese una puntuación válida. (0.0 - 0.4 - 0.6 o más)");
}

// MOstramos el resultado

alert(`Su nivel de rendimiento es: ${determinarNivel(puntos)}
Su pago es es de: ${bonificacion*puntos}`);

