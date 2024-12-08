//Función para pedir los grados
const pedir = () => {
    let regex = /^[0-9-]+$/;
    while (true) {
        let num = parseInt(prompt(`Ingrese los grados celsius:`));
        if (!regex.test(num)) alert("ERROR: Ingrese solo números.");
        else return num;
    }
};

// Guardamos el dato
let gradosCen = pedir();
// Función para convertir a grados Farenheit
const convetirFarenheit = grados => (grados * (9/5)) + 32;
// guardamos lo que retorna la función
let gradosFaren = convetirFarenheit(gradosCen);

// mostramos el resultado
alert(`${gradosCen} °C equivalen a ${gradosFaren} °F`);