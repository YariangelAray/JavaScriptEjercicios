// Función para pedir elnúmero

const pedir = () => {
    let regex = /^[0-9-]+(\.[0-9])*$/;
    while (true) {
        let num = prompt(`Ingrese el número: `);
        if (!regex.test(num)) alert("ERROR: Ingrese solo números.");        
        else return num;
    }
};

// función para determinar si es par o impar
const esParImpar = num => num % 2 == 0 ? "par" : "impar";

// mostramos el resultado
alert("El número es: " + esParImpar(pedir()));