// Pedimos el número
let numero = parseInt(prompt("Ingrese un número: "));
// Definimos una función para conocer si es par.
const esPar = (numero) => numero%2 == 0;
// Mostramos el resultado. Mandamos el numero a la función, dependiendo de lo que retorne será par o impar.
alert(esPar(numero) ? "El número es par." : "El número es impar.");