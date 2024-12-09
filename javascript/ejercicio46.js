// Función para pedir el número
const pedir = (orden) => {
    let regex = /^[0-9-]+(\.[0-9])*$/;
    while (true) {
        let num = parseFloat(prompt(`Ingrese el número ${orden}: `));
        if (!regex.test(num)) alert("ERROR: Ingrese solo números.");        
        else return num;
    }
};

// Se declara una variable en donde se guardará el número mayor, inicializandola en 0
let mayor = 0;

// For que itera según la cantidad de números que se tengan que pedir
for (let i = 1; i <= 3; i++) {
    let num = pedir(i); // Se pide el número

    // Se evalua si ese número es mayor que la variable, si lo es, se guarda.
    if (num > mayor) {
        mayor = num;
    }
}

// Mostramos el mensaje
alert("El mayor de los números es: "+ mayor);