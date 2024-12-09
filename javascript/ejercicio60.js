// Función para pedir los cursos
const pedir = () => {
    let regex = /^[0-9]+$/;
    while (true) {
        let num = parseInt(prompt(`Ingrese la cantidad de cursos que lleva el alumno: `));
        if (!regex.test(num)) alert("ERROR: Ingrese un valor válido.");        
        else return num;
    }
};

// pedimos la cantidad de cursos
let nCursos = pedir();
// definimos el pago por default
let pago = 2_000_000;
// evaluamos la cantidad de cursos para re asignar el pago.
if (nCursos > 6) pago = 1_200_000;

// calculamos el pago total
let pagoTotal = nCursos * pago;
// Mostramos el mensaje
alert("Usted debe pagar: $" + pagoTotal);