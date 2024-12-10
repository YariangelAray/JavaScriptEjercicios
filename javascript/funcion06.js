// Función para pedir los números
const pedir = (orden) => {
    let regex = /^[0-9-]+(\.[0-9])*$/;
    while (true) {
        let num = prompt(`Ingrese el número ${orden}: `);
        if (!regex.test(num)) alert("ERROR: Ingrese solo números.");        
        else return num;
    }
};

const calcMayor = (...numeros) => Math.max(...numeros);

// pedimos una cantidad de numeros
let cantNumeros = pedir("de números de los cuales desea calcular el mayor");
let numeros = []; // array donde se guardan los números

// for que pregunta los números y los agrega al array
for (let i = 1; i <= cantNumeros; i++) {
    numeros.push(pedir(`${i}`));
}

// Mostramos el resultado 
alert(`El número mayor de los números: \n${numeros.join(", ")} 
    \nEs ${calcMayor(...numeros)}` );