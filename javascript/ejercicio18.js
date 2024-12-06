// Función para pedir las variables
const pedir = (letra) => {
    let regex = /^[0-9]+$/;
    while (true) {
        let num = parseInt(prompt(`Ingrese el valor de "${letra}": `));
        if (!regex.test(num)) alert("ERROR: Ingrese solo números.");
        else return num;
    }
};

// Llamamos a la función para que pida las letras
let a = pedir("a");
let b = pedir("b");
let c = pedir("c");

// función para calcular la expresión
const calcular = (a, b, c)=> (a+7*c) / (b+2-a) + 2*b;

//Mostrar el mensaje
alert(`La expresión: (a+7*c) / (b+2-a) + 2*b
Siendo a = ${a}, b = ${b}, c = ${c}.
Es: ${calcular(a, b, c)}`)
