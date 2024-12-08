
// función para pedir las coordenadas de los puntos.
const pedir = (punto, coordenada) => {
    let regex = /^[0-9-]+$/;
    while (true) {
        let num = parseInt(prompt(`Punto ${punto}: \nIngrese la coordenada ${coordenada}: `));
        if (!regex.test(num)) alert("ERROR: Ingrese solo números");
        else return num;
    }
};

// guardamos en variables
let x1 = pedir("A", "x1");
let y1 = pedir("A", "y1");
let x2 = pedir("B", "x2");
let y2 = pedir("B", "y2");

// función para calcular la distancia
const calcDistancia = (x1, x2, y1, y2) => Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);

// guardamos el valor retornado en una variable
let distancia = calcDistancia(x1, x2, y1, y2);

// mostramos el resultado
alert("La distancia entre los puntos A y B es: " + distancia.toFixed(3))