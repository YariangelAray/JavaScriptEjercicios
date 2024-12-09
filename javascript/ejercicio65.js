// Función para pedir el número
const pedir = () => {
    let regex = /^[0-9-]+$/;
    while (true) {
        let num = parseInt(prompt(`Ingrese un número: `));
        if (!regex.test(num)) alert("ERROR: Ingrese un valor válido.");
        else return num;
    }
};
// función para guardar los numeros de forma inversa en un array
const regresiva = num => {
    let numeros = [];
    // iniciamos i en el numero y hacemos un decremento hasta 0
    for (let i = num; i >= 0; i--) numeros.push(i);
    return numeros;
}

// pedimos el número
let numero = pedir();

// evaluamos que el número sea positivo
if (numero < 0) alert("El número debe ser positivo.");
else alert(`Cuenta regresiva desde ${numero}: \n${regresiva(numero).join(", ")}`); //Mostramos el resultado