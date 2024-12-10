//Convertir un número decimal a binario es muy sencillo: 
//basta con realizar divisiones sucesivas entre 2 y escribir los residuos obtenidos en cada 
//división en orden inverso al que han sido obtenidos.

// función para convertir númeos a binario.
const convertirBinario = num =>{
    // array para guardar los residuos
    let residuos = [];
    //El número se va a dividir mienntras que sea mayor que 0
    while (num > 0) {
        let residuo = num%2; //sacamos el residuo del numero entre 2
        residuos.push(residuo); //Agregamos el residuo al array

        // dividimos el número a la mitad
        num = Math.floor(num/2); //Quitamos la parte decimal        
    }
    return residuos.reverse().join(""); // Invertimos el array y lo unimos.
}

// Función para pedir los números
const pedir = (orden) => {
    let regex = /^[0-9]$/;
    while (true) {
        let num = prompt(`Ingrese el número ${orden}: `);
        if (!regex.test(num)) alert("ERROR: Ingrese números válidos");        
        else return parseInt(num);
    }
};

// pedimos los dos números y los sumamos
let num1 = pedir(1);
let num2 = pedir(2);
let suma = num1 + num2;

// Mostramos el resultado.
alert(`La suma de los números ${num1} y ${num2} es: ${suma}
    \nEn binarios es: ${convertirBinario(suma)}`);