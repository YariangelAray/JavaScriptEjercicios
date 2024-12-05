
// Preguntamos si desea la pizza vegetariana, la respuesta será true o false
let pizza = confirm("¿Desea comer pizza vegetariana?");

// array con los ingredientes
let veget = ["pimiento", "tofu"];
let noVeget = ["pepperoni", "jamón", "salmón"];
let ingrediente;

// Función para validar el ingreso del ingrediente
const validarIngre = (mensaje, pizza) => {

    while (true) {
        let ingrediente = parseInt(prompt(`Ingredientes vegetarianos:
            \n${mensaje}
            \nIngrese el número del ingrediente que desea:`));

        // Si esta entre las opciones lo retornamos
        if ((!pizza && ingrediente >= 1 && ingrediente <= 3) || 
            (pizza && ingrediente >= 1 && ingrediente <= 2)) {
            return ingrediente;
        }
        else alert("ERROR: Ingrese un valor válido");   
    }

}

// Función para mostrar la pizza y los ingredientes
const detalles = (pizza, ingredAdd) =>{
    let ingred = ["mozzarella", "tomate", ingredAdd];

    return `${pizza}:
    \n- Ingredientes: 
    \n${ingred.join(", ")}`;}

// Mandamos a la función los ingredientes que se mostraran como lista.
if (pizza) {
   ingrediente = validarIngre("1. Pimiento \n2. Tofu", pizza) - 1;
}
else{
    ingrediente = validarIngre("1. Pepperoni \n2. Jamón \n3. Salmón", pizza) - 1;
}

//Mostramos el resultado
// Si pizza es true, lo cual indica que es vegetariana, enviará los datos de vegetariana. De lo contrario enviará los otros
alert( pizza ? detalles("Pizza vegetariana", veget[ingrediente]) : detalles("Pizza no Vegetariana", noVeget[ingrediente]));