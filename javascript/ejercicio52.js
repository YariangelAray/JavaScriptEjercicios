
// función para pedir las horas
const pedir = () => {
    let regex = /^[0-9]+$/;
    while (true) {
        let horas = parseInt(prompt(`Ingrese la cantidad de horas trabajadas: `));
        if (!regex.test(horas)) alert("ERROR: Ingrese valores válidos");        
        else return horas;
    }
};

// Definimos las variables 
let pagoHora;
let seguir = true;

// Bucle que pregunta a todos los usuarios hasta que se rompan
do {
    // ingresamos el rol
    let rol = parseInt(prompt(`Seleccione su rol: \n1. Empleado de planta\n2. Empleado Administrativo\n\nCualquier letra para salir.`))

    // si el rol es 1 o 2 calculamos los pago por hora
    if (rol == 1 || rol == 2) {
        if (rol == 1) pagoHora = 20000;
        else pagoHora = 10000;
        // pedimos las horas  
        let horas = pedir();
        // calculamos el pago
        let pago = horas * pagoHora;
        // mostramos el pago
        alert("Su pago es: $" + pago);
    }
    else{
        // Si no elije un rol se termina el programa
        alert("Terminando programa...");
        seguir = false;
    }
} while (seguir);