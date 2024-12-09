
// Función para pedir las notas
const pedir = (i) => {
    let regex = /^[0-9]+(\.[0-9])*$/;
    while (true) {
        let cal = parseFloat(prompt(`Alumnos ${i}\nIngrese la nota de su calificación (1-100): `));
        if (!regex.test(cal) || cal < 1 || cal > 100) alert("ERROR: Calificación inválida.");
        else return cal;
    }
};


// Inicializamos las variables 
let notaAlta = 0, notaBaja, notaCien = 0, notaA = 0, notaB = 0, notaC = 0, notaD = 0;

// función para evaluar la calificación e incrementar las variables según corresponda
const evaluarNotas = cal =>{
    if (cal == 100) notaCien++;
    else if (cal < 100 && cal >= 90) notaA ++;
    else if (cal < 90 && cal >= 80) notaB++;
    else if (cal < 80 && cal >= 70) notaC++;
    else if (cal < 70 && cal >= 60) notaD++;
}

// Pedimos la cantidad de alumnos
let nAlumnos = parseInt(prompt("Ingrese la cantidad de alumnos de su curso: "));

// Evaluamos que sea una cantidad válida para continuar con el programa.
if (isNaN(nAlumnos) || nAlumnos <= 0) {
    alert("Ingrese un número de alumnos válido.")
}
else{

    // For que itera sobre la cantidad de alumnos
    for (let i = 0; i < nAlumnos; i++) {
        // pedimos la nota
        let nota = pedir(i+1);
        // evaluamos la nota
        evaluarNotas(nota);

        // aca determinamos la nota mayor y la menor
        if (nota > notaAlta) notaAlta = nota;
        if (i == 0) notaBaja = nota;
        if (nota < notaBaja) notaBaja = nota;
    }

    // cuando acabe el ciclo imprimimos el resultado.
    alert(`La cantidad de alumnos que obtuvieron la máxima nota (100) fueron: ${notaCien} \n
        Cantidad de alumnos con una calificacón de A: ${notaA}
        Cantidad de alumnos con una calificacón de B: ${notaB}
        Cantidad de alumnos con una calificacón de C: ${notaC}
        Cantidad de alumnos con una calificacón de D: ${notaD}
    \nLa nota más alta fue: ${notaAlta} | La nota más baja fue: ${notaBaja}`)
}