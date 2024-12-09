// Función para pedir las notas
const pedir = () => {
    let regex = /^[0-9]+(\.[0-9])*$/;
    while (true) {
        let cal = parseFloat(prompt(`Ingrese la nota de su calificación (1-10): `));
        if (!regex.test(cal) || cal < 1 || cal > 10) alert("ERROR: Calificación inválida.");
        else return cal;
    }
};

// Función para evaluar las notas y retorna el rango
const evaluarNota = cal =>{
    if (cal >= 9.1) return "Excelente";
    else if (cal >= 8.1 && cal <= 9) return "Muy bien";
    else if (cal >= 7.5 && cal <= 8) return "Bien";
    else return "No Aprobado";
}

// Pide la calificación
let cal = pedir();

// Muestra el rango
alert(evaluarNota(cal));