// Función para pedir los pesos
const pedir = () => {
    let regex = /^[0-9]+(\.[0-9])*$/;
    while (true) {
        let num = parseFloat(prompt(`Pesos: `));
        if (!regex.test(num)) alert("ERROR: Ingrese valores válidos.");        
        else return num;
    }
};

// Pedimos los pesos
let pesos = pedir();

// constantes de los valores de las monedas
let pesoDolar = 0.00023;
let pesoEuro = 0.00021;

// funciones para convertir
const convertirDolar = peso => peso*pesoDolar;
const convertirEuro = peso => peso*pesoEuro;

// mostrar mensaje.
alert(`$${pesos} pesos colombianos con igual a $${convertirDolar(pesos).toFixed(2)} dolares y a ${convertirEuro(pesos).toFixed(2)}€ euros.`);