// Función para pedir los números
const pedir = (orden) => {
    let regex = /^[0-9-]+$/;
    while (true) {
        let num = prompt(`Ingrese el número ${orden}: `);
        if (!regex.test(num)) alert("ERROR: Ingrese solo números.");        
        else return num;
    }
};

// función que suma los números enviados, suma solo los que sean positivos
const sumar = (...numeros) =>{

    let suma = 0;
    for (const num of numeros) {
        if (num > 0) suma += num;
    }
    // si la suma es negativa (Lo que significa que ningun número fue positivo) retorna 0
    return suma > 0 ? suma : 0;
}

// pedimos una cantidad de numeros
let cantNumeros = pedir("de números que desea sumar");
let numeros = []; // array donde se guardan los números

// for que pregunta los números y los agrega al array
for (let i = 1; i <= cantNumeros; i++) {
    numeros.push(parseInt(pedir(`${i}`)));
}

// llamamos a la función sumar, enviandoles los números del array con spread
let suma = sumar(...numeros);

// Mostramos el resultado 
alert(suma != 0 ? "La suma de los números positivos es: " + suma : "Todos los números fueron negativos." );