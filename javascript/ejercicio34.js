
// Función para pedir las variables
const pedir = (magnitud, unidad) => {
    let regex = /^[0-9]+(\.[0-9])*$/;
    while (true) {
        let num = parseFloat(prompt(`Ingrese ${magnitud} del depósito en ${unidad}: `));
        if (!regex.test(num)) alert("ERROR: Ingrese valores válidos.");        
        else return num;
    }
};
// función para calcular el volumen
const calcVolumen = (altura, radio) => Math.PI*(radio**2)*altura;
// calcular el tiempo en función del caudal
const calcTiempo = (caudal, volumen) => volumen / caudal;
// convertir minutos a segundos
const convertMinutos = tiempo => tiempo*60;

// Pedimos la atura y el radio del deposito
let altura = pedir("la altura", "metros");
let radio = pedir("el radio", "metros");
// Calculamos el volumen del mismo
let volumenDepo = calcVolumen(altura, radio);
// pedimos el caudal
let caudal = pedir("el caudal", "litros por segundos");
// calculamos el tiempo
let tiempo = calcTiempo(caudal, volumenDepo);

// convertimos el tiempo retornado en segundos
let tiempMinutos = convertMinutos(tiempo);

// mostramos el resultado
alert(`El tiempo que tarda el caudal en llenarse es: ${tiempMinutos.toFixed(3)} minutos.`);
