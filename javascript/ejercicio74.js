// definimos la palabra con la que el usuario detendrá la ejecución del bucle
let salir = "salir";
let frase;
// bucle while que ejecuta siempre que la frase no sea "salir"
do {
    // pedimos la frase
    frase = prompt("Ingrese algo (ingrese 'salir' para salir): ");
    if (frase !== salir) alert(frase); // mostramos la frase (Tal como dice el enunciado)
} while (frase !== salir);

// cuando se termine el ciclo, mostramos el mensaje.
alert("El programa ha terminado.")