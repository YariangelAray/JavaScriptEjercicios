// Función para pedir los lados
const pedir = (lado) => {

    let regex = /^[0-9]+$/;

    while (true) {
        let num = parseInt(prompt(`Dimensiones del cilindro:
                                \n${lado}: `));

        if (!regex.test(num)) alert("ERROR: Ingrese solo números");
        else return num;
    }

};

// Se llama a la función para los datos
let radio = pedir("Radio");
let altura = pedir("Altura");

// Función para calcular el área
const area = (radio, altura) => (2*Math.PI*radio*altura) + (2*Math.PI*(radio**2));
// Función para calcular el volumen
const volumen = (radio, altura) => Math.PI*radio*(altura**2);


// Se muestra el mensaje
alert(`El área del cilindro es: ${area(radio, altura).toFixed(3)}
El volumen del cilindro es: ${volumen(radio, altura).toFixed(3)}`);