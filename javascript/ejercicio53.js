// Función para comentar todo
const pedir = (producto) => {
    let regex = /^[0-9-]+(\.[0-9])*$/;
    while (true) {
        let num = parseFloat(prompt(`Ingrese el costo del producto ${producto}: `));
        if (!regex.test(num)) alert("ERROR: Ingrese solo números.");        
        else return num;
    }
};

// función para calcular el monto del iva aplicado a la compra
const calcIva = (compra, iva) => compra * (iva/100);
let iva = 20;
// cantidad de productos
let cantProductos = 5;
// variable para ir acumulando el subtotal de la compra 
let subtotalcompra = 0;
// buble que itera según la cantidad de productos
for (let i = 1; i <= cantProductos; i++) {
    subtotalcompra += pedir(i);
}

let subtotalIva = calcIva(subtotalcompra, iva);

// calculamos el total de la compra sumando el subtotal y el monto del iva
let totalCompra = subtotalcompra + subtotalIva;

// mostramos el resultado
alert(`El IVA aplicado a esta compra es: ${iva} % => $${subtotalIva}
El subTotal de la compra es: $${subtotalcompra}
El total de la compra es: $${totalCompra}`);

