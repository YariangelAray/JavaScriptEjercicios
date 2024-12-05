// Función para pedir los números y no permita letras
const pedir = (orden) => {

    let regex = /^[0-9-]+$/;

    while (true) {
        let num = parseInt(prompt(`Ingrese un ${orden}, por favor: `));

        if (!regex.test(num)) alert("ERROR: Ingrese solo números");
        else return num;
    }

};

// Se llama a la función
let num1 = pedir("primer");
let num2 = pedir("segundo");

// Función para hacer las operaciones que retorna el mensaje con los resultados

const operaciones = (num1, num2) =>{
    let suma = num1 + num2;
    let resta = num1 - num2;
    let mult = num1 * num2;
    let div = num2 == 0 ? "No se pudo realizar la división" : num1 / num2;

    return `Número 1: ${num1} | Número 2: ${num2}
            \nSuma: ${suma}
            \nResta: ${resta}
            \nMultiplicación: ${mult}
            \nDivisión: ${div}`;
}

// Se muestra el mensaje
alert(operaciones(num1, num2));

