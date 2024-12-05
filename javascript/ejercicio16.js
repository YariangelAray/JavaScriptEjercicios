let km = 2;
let min = 5;

const convertirMetros = km => km * 1000;
const convertirSeg = min => min * 60;

const velocidad = (metros, segundos) => metros/segundos;

let metros = convertirMetros(km);
let seg = convertirSeg(min);

alert(`La velocidad del proyectil es de: ${velocidad(metros, seg).toPrecision(3)} m/s.` )