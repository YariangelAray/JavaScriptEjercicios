// Función para pedir los números
const pedir = (numero) => {
    let regex = /^[0-9-]+(\.[0-9])*$/;
    while (true) {
        let num = parseFloat(prompt(`Ingrese el número ${numero}: `));
        if (!regex.test(num)) alert("ERROR: Ingrese solo números.");        
        else return num;
    }
};

// pedimos el número 1 y el 2
let num1 = pedir(1);
let num2 = pedir(2);

// evaluamos que el primero sea mayor que el segundo para hacer la operación
if (num1 > num2) alert("El resultado de la resta es: " + (num1-num2));
else alert("No es posible realizar la operación")