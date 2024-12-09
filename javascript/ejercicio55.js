
// Función para pedir la letra de la membresía
const pedir = () => {
    let regex = /^[Aa]|[Bb]|[Cc]$/;
    while (true) {
        let letra =prompt(`Ingrese su tipo de membresía (A, B, C): `);
        if (!regex.test(letra)) alert("ERROR: Ingrese valores válidos. (A - B - C.)");        
        else return letra;
    }
};
// Función para pedir el precio del helado
const pedirPrecio = () => {
    let regex = /^[0-9]+(\.[0-9])*$/;
    while (true) {
        let num = parseFloat(prompt(`Ingrese el precio del helado: `));
        if (!regex.test(num)) alert("ERROR: Ingrese un precio válido.");        
        else return num;
    }
};

// Función para calcular el descuento
const calcDescuento = (compra, desc) => compra *(desc / 100);

// Se piden el tipo de membresía y el helado
let tipoMembresia = pedir();
let precioCompra = pedirPrecio();

// se define una variable de descuento, dependiendo de la membresía, se asigna un descuento diferente 
let desc;
switch (tipoMembresia) {
    case "a":
        desc = 10;
        break;
    case "b":
        desc = 15;
        break;
    case "c":
        desc = 20;
        break;
    default:
        break;
}

// Se calcula el precio final de la compra, restandole a la compra el descuento que se le aplica
let precioFinal = precioCompra - calcDescuento(precioCompra, desc);

// Se imprime el resultado
alert("El precio final de la compra es: $" + precioFinal);