// Función para pedir el radio
const pedir = () => {
    let regex = /^[0-9]+$/;
    while (true) {
        let num = parseInt(prompt(`Ingrese el radio de la esfera: `));
        if (!regex.test(num)) alert("ERROR: Ingrese solo números");
        else return num;
    }

};

// Se llama a la función que retorna el número
let radio = pedir();

// Función para calcular el volumen
const volumen = (radio) => (4/3)*radio*(Math.PI**3);


// Se muestra el mensaje
alert(`El volumen de la esfera es: ${volumen(radio).toFixed(3)}`);