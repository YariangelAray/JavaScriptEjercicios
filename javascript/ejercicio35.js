// Se definen las variables
let precioLlave = 11500;
let cantLlaves = 5;
let bomba = 1168000;
let cajaPernos = 87000;
let cantCajasPernos = 3;

let sobrante = 91000

// función para multiplicar
const multiplicar = (num, cant) => num * cant;

// se obtiene el precio total de los juegos de llaves y las cajas de los pernos
let totalPrecioLlaves = multiplicar(precioLlave, cantLlaves);
let totalPrecioCajaPernos = multiplicar(cajaPernos, cantCajasPernos);

// Se suma el total que se gastó
let totalGastos = totalPrecioCajaPernos + totalPrecioLlaves + bomba;
// Se suma el gasto a lo sobrante
let totalDinero = totalGastos + sobrante;
// Se muestra el resultado
alert("Tenía: $"+totalDinero);