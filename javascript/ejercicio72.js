// Función para pedir la palabra
const pedir = () => {
    let regex = /^[A-Za-z]+$/;
    while (true) {
        let palabra = prompt(`Ingrese una palabra: `).trim();
        if (!regex.test(palabra)) alert("ERROR: Ingrese solo letras o una única palabra");
        else return palabra;
    }
};

// función para invertir la palabra y retornar un arreglo con sus letras inversas
const invertir = palabra => palabra.split("").reverse(); //El metodo split convierte la palabra en un arreglo, el metodo reverse invierte ese arreglo

// pedimos la palabra
let palabra = pedir();

// Damos un aviso
alert("Resultado mostrado en consola.")

//Mostramos el resultado
console.log(`Letras de "${palabra}" invertidas: 
    \n${invertir(palabra).join("\n")}`);