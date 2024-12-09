// Función para pedir los pagos
const pedir = () => {
    let regex = /^[0-9-]+(\.[0-9])*$/;
    while (true) {
        let num = parseFloat(prompt(`Ingrese el pago realizado: `));
        if (!regex.test(num)) alert("ERROR: Ingrese solo números.");        
        else return num;
    }
};


// función para evaluar si el pago es mayor a 130000, si lo es lo retorna con el descuento, si no, no le realiza ninguna operación
const evaluarPago = pago => pago > 130000 ? (pago - (pago*0.15)) : pago;

// variable donde se guardan el total de pagos
let totalPagos = 0;

// preguntar si desea ingresar un pago
let pago;
do {
    pago = confirm("¿Desea registrar un pago?");
    if (pago) {
        // llamamos a la función para pedir el número, luego lo evaluamos y guardamos lo retornado
        let precioPago = evaluarPago(pedir());
        totalPagos += precioPago; // lo incrementamos a una variable
    }
} while (pago);

// Mostrar el resultado si hubo pagos.
alert(totalPagos === 0 ? "No se hicieron pagos." :"El total de pagos hechos fue: $" + totalPagos);