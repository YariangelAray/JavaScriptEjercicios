// función para pedir la calificación

const pedir = (orden) => {
    let regex = /^[0-9]+$/;
    while (true) {
        let num = parseInt(prompt(`Ingrese la calificación del examen ${orden} (1-5): `));
        if (!regex.test(num) || num < 1 || num > 5) alert("ERROR: Calificación inválida.");
        else return num;
    }
};

// función que calcula el promedio
const promedio = (suma, total) => suma/total;

let sumaCali = 0;
let numExamenes = 4;

// Se piden las calificaciones
for (let i = 1; i <= numExamenes; i++) {
    sumaCali += pedir(i);
}

// Se muestra el mensaje 
alert(`El promedio de sus calificaciones es: ${promedio(sumaCali, numExamenes)}`);