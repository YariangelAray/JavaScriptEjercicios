
// Función para pedir los lados
const pedir = (lado) => {
    let regex = /^[0-9-]+(\.[0-9])*$/;
    while (true) {
        let num = parseFloat(prompt(`Ingrese la ${lado}: `));
        if (!regex.test(num)) alert("ERROR: Ingrese solo números.");        
        else return num;
    }
};

// función para sacar el área de un triangulo
const area= (base, altura) => base*altura;

// Se piden los lados
let base = pedir("base");
let altura = pedir("altura");

// Se evalua, si son negativos se muestra una alerta, si no, se muestra el resultado
if (base < 0 || altura < 0) alert("No se puede sacar el área del rectángulo. Ambos lados deben ser positivos.");
else alert("El área del rectángulo es: " + area(base, altura));
