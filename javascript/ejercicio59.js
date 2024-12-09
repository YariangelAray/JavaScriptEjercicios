// Función para pedir 
const pedir = (mensaje) => {
    let regex = /^[0-9]+$/;
    while (true) {
        let num = parseInt(prompt(`Ingrese su ${mensaje}: `));
        if (!regex.test(num)) alert("ERROR: Ingrese un valor válido.");        
        else return num;
    }
};

// pedimos la edad, la estatura y el peso
let edad = pedir("edad");
let estatura = pedir("estatura");
let peso = pedir("peso");

// función para evaluar los requisitos, los que no cumpla se guardan en un array.
const evaluarRequisitos = (edad, estatura, peso) => {
    let noSeleccionado = [];
    if (edad > 19) noSeleccionado.push("- Debe tener 19 años o menos.");
    
    if (estatura <= 175) noSeleccionado.push("- Su estatura debe ser mayor a 175 cm.");

    if (peso < 75 || peso > 80) noSeleccionado.push("- Su peso debe estar entre los 75kg y los 80kg.");

    return noSeleccionado;
}

// Guardamos en una variable el array que retorna la funció.
let noSeleccionado = evaluarRequisitos(edad, estatura, peso);

// Mostramos si ha sido seleccionado o no, si el array contiene elementos significa que no cumple con los requisitos.
alert(noSeleccionado.length === 0 ? "Usted ha sido seleccionado." : `Usted no cumple con los requisitos:\n${noSeleccionado.join(`\n`)}`)