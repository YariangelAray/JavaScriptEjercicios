// Función para pedir el número
const pedir = () => {
    let regex = /^[0-9]+$/;
    while (true) {
        let num = prompt(`Ingrese un número para saber si es primo: `);
        if (!regex.test(num)) alert("ERROR: Número inválido.");
        else return num;
    }
};

// función para saber si el núumero es primo
const esPrimo = num =>{
    for (let i = 2; i <= num/2; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Pedimos el número
let numero = pedir();

// Mostramos el resultado
alert(esPrimo(numero) ? "El número es primo." : "El número no es primo.")