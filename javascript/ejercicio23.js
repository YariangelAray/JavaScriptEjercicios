// Función para pedir datos
const pedir = () => {
    let regex = /^[0-9]+$/;
    while (true) {
        let num = parseInt(prompt(`Ingrese la velocidad del auto expresada en kilometros por hora: `));
        if (!regex.test(num)) alert("ERROR: La velocidad solo puede ser positiva. O debe ingresar números.");
        else return num;
    }
};

// Pedimos el dato
let velocidadKmH = pedir();

// función para convertir la velocidad a metros por segundos
const convertirVelocidadKmH = velocidad => velocidad/3.6;

// Llamamos a la funión mandando la velocidad en km/h
let velocidad = convertirVelocidadKmH(velocidadKmH);

// mostramos el resultado
alert(`La velocidad del auto es de: ${velocidad.toFixed(3)} m/s.` )