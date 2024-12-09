// Función para pedir el número
const pedir = () => {
    let regex = /^[0-9]+$/;
    while (true) {
        let num = parseInt(prompt(`Ingrese un número para conocer su tabla de multiplicar: `));
        if (!regex.test(num)) alert("ERROR: Número inválido.");
        else return num;
    }
};

// Función para imprimir la tabla de multiplicar
const tabla = num =>{
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num*i}`);
    }
}

//pedimos el número
let num = pedir();

// mostramos un aviso
alert("Tabla de multiplicar mostrada por consola.")

//llamamos a la función
tabla(num);