// Función para pedir el número
const pedir = (orden) => {
    let regex = /^[0-9-]+(\.[0-9])*$/;
    while (true) {
        let num = parseFloat(prompt(`Ingrese el número ${orden}: `));
        if (!regex.test(num)) alert("ERROR: Ingrese solo números.");        
        else return num;
    }
};

// Función para evaluar si los números enviados son todos iguales
const evaluarIgualdad = (...numeros) =>{
    // Se inicializa un contador
    let iguales = 0;
    // for que itera sobre la cantidad de números que haya
    for (let i = 0; i < numeros.length; i++) {
        
        // si la variable i es la ultima del array, no se evalua para que no de error, inmediatamente se rompe el ciclo.
        if (i == (numeros.length-1)) break;
        else if (numeros[i] == numeros[i+1]) iguales++; // si no, si el numero que este en la posicion de i es igual al de la siguiente posicion, se incrementa la variable iguales
    }

    // Al finalizar el ciclo, si la cantidad de iguales es igual a la cantidad de números en el array, menos uno (porque no se evaluó el último), retorna true.
    return iguales == numeros.length-1;
}

// Se declara una variable en donde se guardará el número mayor, inicializandola en 0
let mayor = 0;
let menor; // Se declara otra variable donde se guardará el número menor
let numeros = []; // array acio para guardar los números

// For que itera según la cantidad de números que se tengan que pedir
for (let i = 1; i <= 3; i++) {
    let num = pedir(i); // Se pide el número
    numeros.push(num); // se agrega el número al array

    // Se evalua si ese número es mayor que la variable, si lo es, se guarda.
    if (num > mayor) mayor = num;

    // Se guarda el primer número en la variable menor para tener un valor de referencia
    if (i == 1) menor = num;

    // Se evalua que el número sea menor que el de referencia, si lo es, se guarda
    if (num < menor) menor = num;
}

// Se llama a la función enviando el array de los números
let iguales = evaluarIgualdad(...numeros);

// Mostramos el mensaje
alert(iguales ? "Los números son todos iguales." : `El mayor de los números es: ${mayor} \nEl menor de los números es: ${menor}`);