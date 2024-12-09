// Función para pedir la figura geométrica
const pedirLetra = () => {
    while (true) {
        let letra = prompt(`¿Qué figura geométrica desea calcular? Triángulo (T) o Círculo (C)\n(Ingrese la letra): `).toLowerCase();
        if (letra == "t" || letra == "c") return letra;
        else alert("ERROR: Ingrese solo T o C.");        
    }
};

// Función para pedir el número
const pedir = (lado) => {
    let regex = /^[0-9-]+(\.[0-9])*$/;
    while (true) {
        let num = parseFloat(prompt(`Ingrese ${lado}: `));
        if (!regex.test(num)) alert("ERROR: Ingrese solo números.");        
        else return num;
    }
};

// función para sacar el área de un triangulo
const areaTriangulo = () => {
    let base = pedir("la base");
    let altura = pedir("la altura");

    return (base*altura)/2
}

// función para sacar el área de un circulo
const areaCirculo = () => {
    let radio = pedir("el radio");
    return Math.PI*(radio**2);
}

// Pedimos la letra
let letra = pedirLetra();
let area;

// Evaluamos la letra y damos el resultado
if (letra == "t") alert("El área del triángulo es: " + areaTriangulo().toFixed(3));
else alert("El área del círculo es: " + areaCirculo().toFixed(3));