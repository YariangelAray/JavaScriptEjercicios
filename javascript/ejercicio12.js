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
const area = (base, altura) =>{
    let area = base * altura;

    return `Área del rectángulo: ${area}`;
}

// Se muestra el mensaje
alert(area(base, altura));