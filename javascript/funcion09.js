// Función para pedir el número
const pedir = () => {
    let regex = /^[0-9]+$/;
    while (true) {
        let num = prompt(`Ingrese un número para la altura de la pirámide: `);
        if (!regex.test(num)) alert("ERROR: Número inválido.");
        else return num;
    }
};

// Pedimos el número que será la altura
let numero = pedir();

// función para imprimir la pirámide
const piramide = num =>{
    // bucle for que itera según el número ingresado
    for (let i = 1; i <= num; i++) {
        // espacios en blanco antes de los asteriscos, se repiten segun el número y se les resta i para que sean cada vez menos
        let espacios = ' '.repeat(num - i);
        // cadena de asteriscos, se multiplican por 2 y se les resta 1 para que vayan quedando impares
        let asteriscos = '*'.repeat(i * 2 - 1);

        // Se imprimen en consola los espacios más los asteriscos
        console.log(espacios + asteriscos);
  }
}

// Mostramos un aviso
alert("Piramide mostrado en consola.");
// llamamos a la función
piramide(numero);