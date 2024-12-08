let cantCajas = 25;
let cajaPeso = 748;

// función para multiplicar
const multiplicar = (num, cant) => num * cant;

// Guardamos el peso total en una variable
let totalPeso = multiplicar(cantCajas, cajaPeso);

alert(`Transporta ${totalPeso} kg`);