// Función para pedir el número
const pedir = () => {
    let regex = /^[0-9]+$/;
    while (true) {
        let num = parseInt(prompt(`Ingrese un número: `));
        if (!regex.test(num)) alert("ERROR: Número inválido.");
        else return num;
    }
};

// Pedimos el número
let numero = pedir();

// función para imprimir el triángulo
const triangulo = num =>{

    // cadena vacia para ir almacenando los asteriscos
    let asteriscos = ""; 

    // bucle for que itera según el número ingresado
    for (let i = 0; i < num; i++) {
        // agregamos un asterisco a la cadena vacía
        asteriscos += "*";
        // Lo imprimimos
        console.log(asteriscos);
    }
}

// llamamos a la función
triangulo(numero);
// Mostramos un aviso
alert("Triángulo mostrado en consola.");