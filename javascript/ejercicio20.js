// Función para pedir las variables
const pedir = (letra) => {
    let regex = /^[0-9-]+$/;
    while (true) {
        let num = parseInt(prompt(`Para la ecuación de segundo grado. \nIngrese el valor de "${letra}": `));
        if (!regex.test(num)) alert("ERROR: Ingrese solo números.");
        else return num;
    }
};

// Llamamos a la función para que pida las variables
let a = pedir("a");
let b = pedir("b");
let c = pedir("c");

// Definimos a una función para sacar el discriminante
const sacarDiscriminante = (a, b, c) => b**2 - 4 * a * c;

// Definimos una función para obtener las raices reales
const raicesReales = (a, b, discriminante) => {    
    let x1 = (-b+Math.sqrt(discriminante))/(2*a);
    let x2 = (-b-Math.sqrt(discriminante))/(2*a);
    return [x1, x2];
}

// Definimos una función que nos retornará los resultados dependiendo de la evaluación del discriminante
const segundoGrado = (a, b, c) => {
    
    let discriminante = sacarDiscriminante(a, b, c);

    if (discriminante > 0) {
        let [x1, x2] = raicesReales(a, b, discriminante);
        return `La ecuación tiene dos raíces reales y distintas. \n x1 = ${x1} | x2 = ${x2}`;
    }
    else if (discriminante == 0) {
        let [x] = raicesReales(a, b, discriminante);
        return `La ecuación tiene una solución real repetida.\n x = ${x}` ;
    }
    else{
        return "La ecuación no tiene soluciones reales.";
    }

}

// Mostramos el mensaje que retorna la función
alert(segundoGrado(a, b, c));
