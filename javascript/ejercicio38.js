//Función para pedir el total de tapas
const pedirTapas = () => {
    let regex = /^[0-9]+$/;
    while (true) {
        let num = parseFloat(prompt(`Ingrese el total de tapas: `));
        if (!regex.test(num)) alert("ERROR: Ingrese valores válidos.");        
        else return num;
    }
};

// pedimos el total de tapas
let totalTapas = pedirTapas();
// calculamos las partes de jairo y martín
let parteMartin = 2/3 * totalTapas;
let parteJairo = 1/4 * totalTapas;

// La resta de estos dos al total de tapas será la parte que le corresponda a Lorena
let parteLorena = totalTapas - parteMartin - parteJairo;

// Mostramos el resultado
alert("El total de tapas que le corresponde a Lorena es: " + parteLorena);