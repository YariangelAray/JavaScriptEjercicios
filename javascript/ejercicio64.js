// Función para pedir el número
const pedir = () => {
    let regex = /^[0-9-]+$/;
    while (true) {
        let num = parseInt(prompt(`Ingrese un número: `));
        if (!regex.test(num)) alert("ERROR: Ingrese un valor válido.");
        else return num;
    }
};
// función para guardar los numeros impares en un array
const guardarImpares = num => {
    let numPares = [];
    for (let i = 1; i <= num; i++) if (!(i % 2 == 0)) numPares.push(i);
    return numPares;
}

// pedimos el número
let numero = pedir();

// evaluamos que el número sea positivo
if (numero < 0) alert("El número debe ser positivo.");
else alert(`Números impares hasta el número ${numero}: \n${guardarImpares(numero).join(", ")}`); //Mostramos el resultado