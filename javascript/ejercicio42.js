// Inicializamos las variables
let montoTotal = 0, articulo = 0;
// do while para hacer que el bucle se ejecute al menos una vez
do {
    // Pedimos el producto a comprar
    articulo = parseInt(prompt(`Seleccione el número del articulo que desea comprar (cualquier letra para terminar): \n
        1. lapiceros
        2. cuadernos
        3. libros`));
    if (articulo >= 1 && articulo <=3) alert("¡Gracias por su compra!"); //mostrar mensajito

    // Según sea el articulo, aumentamos el monto total de la compra
    switch (articulo) {
        case 1:
            montoTotal += 5550;
            break;
        case 2:
            montoTotal += 7550;
            break;
        case 3:
            montoTotal += 10000;
            break;
        default:
            break;
    }
    // Si la opcion ingresada no esta entre las opciones, se rompe el ciclo
} while (articulo >= 1 && articulo <=3 );

// Mostramos el mensaje.
alert(montoTotal == 0 ? "No se compro nada" :"El monto total de la venta es: $"+ montoTotal);
