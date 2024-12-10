// Función para pedir los números
const pedir = (orden) => {
    let regex = /^[0-9-]+$/;
    while (true) {
        let num = prompt(`Ingrese el número ${orden}: `);
        if (!regex.test(num)) alert("ERROR: Ingrese solo números.");        
        else return num;
    }
};

// función para dar el inverso aditivo de un array de números
const inversoAditivo = numeros =>{
    //array para almacenar los inversos
    let inversos = [];

    // iteramos sobre cada número del array de numeros
    for (let num of numeros) inversos.push(-num); // Agregamos el inverso aditivo al nuevo array
    
    return inversos;
}

// pedimos una cantidad de numeros
let cantNumeros = pedir("de números que desea invertir");
let numeros = []; // array donde se guardan los números

// for que pregunta los números y los agrega al array
for (let i = 1; i <= cantNumeros; i++) {
    numeros.push(parseInt(pedir(`${i}`)));
}

// mostramos el resultado
alert(`Números:\n ${numeros.join(", ")}
    \nInverso aditivo de los números: \n ${inversoAditivo(numeros).join(", ")}`);