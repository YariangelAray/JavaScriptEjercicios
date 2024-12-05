// Función para pedir el radio
const pedir = () => {
    let regex = /^[0-9]+$/;
    while (true) {
        let num = parseInt(prompt(`Ingrese el radio, por favor: `));
        if (!regex.test(num)) alert("ERROR: Ingrese solo números");
        else return num;
    }

};

// Se llama a la función que retorna el número
let radio = pedir();

// Función para calcular el área
const area = (radio) => radio*(Math.PI**2);
// Función para calcular la longitud
const longitud = (radio) => 2*radio*Math.PI;

// Se muestra el mensaje
alert(`El área de la circunferencia es: ${area(radio).toFixed(3)}
La longitud de la circunferencia es: ${longitud(radio).toFixed(3)}`);