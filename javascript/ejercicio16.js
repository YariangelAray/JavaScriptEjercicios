
// Variables
let km = 2;
let min = 5;

// funciones para convertir a metros y a segundos
const convertirMetros = km => km * 1000;
const convertirSeg = min => min * 60;
// función para calcular la velocidad
const velocidad = (metros, segundos) => metros/segundos;
// Se llama a las funciones
let metros = convertirMetros(km);
let seg = convertirSeg(min);
// Resultado
alert(`La velocidad del proyectil es de: ${velocidad(metros, seg).toPrecision(3)} m/s.` )