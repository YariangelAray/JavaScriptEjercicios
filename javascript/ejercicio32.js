
// función para pedir los precios de los productos
const pedir = (producto) => {
    let regex = /^[0-9]+$/;
    while (true) {
        let num = parseInt(prompt(`Ingrese el precio del producto ${producto}: `));
        if (!regex.test(num)) alert("ERROR: Ingrese valores válidos");
        else return num;
    }
};

// Función para calcular el descuento que se le debe hacer a cada producto
const calcDescuento = (precio, descuento) => precio * (descuento/100);

// función que retornará la suma de los precios, con el parametro rest para que los agrupe y haga un array.
const sumar = (...numeros) => {
    let suma = 0;
    for (const num of numeros) suma += num;
    return suma;
}

// Se define una variable que indica la cantidad de productos que hay, y  un array vacio en donde se almacenarán el precio de los mismos
let cantProductos = 5;
let precioProductos = [];

// For que itera según la cantidad de productos
for (let i = 1; i <= cantProductos; i++) {

    let precio = pedir(i); // Se pide el precio y se guarda en una variable
    precioProductos.push(precio); // variable que se agrega al array

    // Evaluamos si son los dos primeros (i<=2) o los dos ultimos (i>=4)
    if (i <= 2) {
        // En una variable guardamos el precio con descuento (se llama a la función de calcular el descuento, enviando el porcentaje y el precio, lo que retorne lo restamos del precio original)
        let precioDesc = precio - calcDescuento(precio, 5); 
        precioProductos[i-1] = precioDesc; // Agregamos ese nuevo precio al array, reemplazando el anterior.
    }
    else if (i >=4){
        let precioDesc = precio - calcDescuento(precio, 2);
        precioProductos[i-1] = precioDesc;
    }
}

// Llamamos a la función enviando el array con los precios, con el operador spread para que los envie individualmente.
let totalCompra = sumar(...precioProductos);

// Función que nos dará un mensaje con los productos y sus precios a manera de lista
const imprimir = (precios) =>{
    let mensaje = ``;
    for (let i = 1; i <= cantProductos; i++) {
        mensaje += `\nEl producto ${i} costó: $${precios[i-1]}`;
    }
    return mensaje
}

// Mostramos el resultado.
alert(`Productos: ${imprimir(precioProductos)}\n
El total de la compra fue: $${totalCompra}`);