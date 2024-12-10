// Función para pedir los números

const pedir = (orden) => {
    let regex = /^[0-9-]+(\.[0-9])*$/;
    while (true) {
        let num = prompt(`Ingrese el número ${orden}: `);
        if (!regex.test(num)) alert("ERROR: Ingrese solo números.");        
        else return num;
    }
};

// función para determinar el mayor de ambos.
const mayorDos = (num1, num2) => num1 > num2 ? num1 : num2;

// guardamos lo retornado en una variable
let numMayor = mayorDos(pedir(1), pedir(2));

// mostramos el resultado
alert("El número mayor es: " + numMayor);