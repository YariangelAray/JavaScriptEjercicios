// Función para imprimir la tabla de multiplicar sin el 5
const tabla = num =>{
    for (let i = 1; i <= 10; i++) {
        if (i != 5) console.log(`${num} x ${i} = ${num*i}`);
    }
}

let num = 5;

//llamamos a la función
tabla(num);

// mostramos un aviso
alert("Tabla de multiplicar mostrada por consola.")
