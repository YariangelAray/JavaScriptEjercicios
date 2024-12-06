// Función para pedir las variables
const pedir = () => {
    let regex = /^[0-9-]+$/;
    while (true) {
        let num = parseInt(prompt(`Ingrese los minutos que duró la llamada: `));
        if (!regex.test(num)) alert("ERROR: Ingrese solo números.");
        else return num;
    }
};


// Definimos las constantes del precio y del IVA
const precioMinuto = 355;
const IVA = 0.2;

// Llamamos a la función para pedir los datos.
let minutos = pedir();

//Definimos una función para calcular el pago de la llamada
const calcPagoLlamada = minutos => ((minutos*precioMinuto) * IVA) +  (minutos*precioMinuto);

// Mostramos el mensaje
alert("El precio a pagar por la llamada es: " + calcPagoLlamada(minutos));