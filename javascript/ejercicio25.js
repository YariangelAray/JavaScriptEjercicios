
// Función para pedir el precio del medicamento
const pedir = () => {
    let regex = /^[0-9]+$/;
    while (true) {
        let num = parseInt(prompt(`Ingrese el precio de su medicamento `));
        if (!regex.test(num)) alert("ERROR: Precio inválido.");
        else return num;
    }
};

// Se guarda lo retornado en la variabl
let precio = pedir();
let porcentajeDescuento = 10; // Se define el porcentaje de descuento

// función para calcular el descuento
const calcDescuento = (precio, descuento) => precio * (descuento/100);

// Se guarda el descuento en una variable
let descuento = calcDescuento(precio, porcentajeDescuento)
let precioFinal = precio - descuento; // Se resta al precio

// Se muestra el resultado
alert(`Se le aplicará el ${porcentajeDescuento}% de descuento a su medicamento:
    - Descuento: $${descuento}
    - Precio final: $${precioFinal}`);