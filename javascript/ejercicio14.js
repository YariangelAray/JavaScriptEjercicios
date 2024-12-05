// Función para pedir los lados
const pedir = (lado) => {

    let regex = /^[0-9]+$/;

    while (true) {
        let num = parseInt(prompt(`Ingrese la ${lado}, por favor: `));

        if (!regex.test(num)) alert("ERROR: Ingrese solo números");
        else return num;
    }

};

// Se llama a la función
let base = pedir("base");
let altura = pedir("altura");

// Función para calcular el área
const area = (base, altura) => (base * altura)/2;

// Se muestra el mensaje
alert("El área del triángulo es: " + area(base, altura));