
// función que retorna un número random entre un mínimo y un máximo
const numeroRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// función para determinar si es par o impar
const esParImpar = num => num % 2 == 0 ? "par" : "impar";

// guardamos el número que retorna la función, entre 1 y 10
let numero = numeroRandom(1, 10);

//mostramos el resultado
alert(`El número random (${numero}) es: ${esParImpar(numero)}`);
