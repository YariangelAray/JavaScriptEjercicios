
// Función para pedir las notas, se manda el mensaje que es la nota que se pedirá
const pedir = (mensaje) => {
    let regex = /^[0-9]+$/;
    while (true) {
        let num = parseInt(prompt(`Ingrese la nota del ${mensaje} (1-10): `));
        if (!regex.test(num) || num < 1 || num > 10) alert("ERROR: Calificación inválida.");
        else return num;
    }
};

// función que calcula el promedio
const promedio = (suma, total) => suma/total;
// función que calcula el porcentaje de la nota
const porcentaje = (nota, porcentaje) => nota * (porcentaje/100);

// Variable en donde se van acumulando las notas de los parciales para luego promediarlas
let sumaParciales = 0;
for (let i = 1; i <= 3; i++) {
    sumaParciales += pedir(`parcial ${i}`)   
}
// Se obtiene el promedio
let promParciales = promedio(sumaParciales, 3);

// Se piden las notas del examen y el trabajo final
let examenFinal = pedir("examen final");
let trabajoFinal = pedir("trabajo final");

// Se calcula la nota final sumando los porcentajes de las calificaciones
let notaFinal = porcentaje(promParciales, 55) + porcentaje(examenFinal, 30) + porcentaje(trabajoFinal, 15);

// Se muestra el resultado con un mensaje de parobado o no
alert(`Su nota final para la matería de algoritmos es: ${notaFinal.toFixed(3)}
${notaFinal > 5 ? "APROBADO" : "REPROBADO"}`);