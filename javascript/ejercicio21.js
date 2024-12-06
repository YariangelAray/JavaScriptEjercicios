// Función para pedir las variables
const pedir = (letra) => {
    let regex = /^[0-9-]+$/;
    while (true) {
        let num = parseInt(prompt(`Para el volumen del elipsoide. \nIngrese el eje "${letra}": `));
        if (!regex.test(num)) alert("ERROR: Ingrese solo números.");
        else return num;
    }
};

// Llamamos a la función para que pida las variables
let a = pedir("a");
let b = pedir("b");
let c = pedir("c");

// Función para calcular el volumen
const volumen = ( a, b, c) => (4/3)*Math.PI*a*b*c;

// Se muestra el mensaje
alert(`El volumen del elipsoide es: ${volumen(a, b, c).toFixed(3)}`);