// función para pedir las edades
const pedirEdad = (persona) => {
    let regex = /^[0-9]+$/;
    while (true) {
        let num = parseInt(prompt(`${persona}: Ingrese su edad actual: `));
        if (!regex.test(num)) alert("ERROR: Ingrese valores válidos.");
        else if (num < 0) alert("ERROR: Ingrese una edad válida.")
        else return num;
    }
};

// Guardamos las edades
let edadMadre = pedirEdad("Madre");
let edadHijo = pedirEdad("Hijo");

// Calculamos la edad
const calcEdad = (edad1, edad2) => edad1-edad2;
let edadMadreAntes = calcEdad(edadMadre, edadHijo);

// Mostramos el resultado
alert(`La edad de la madre cuando nació su hijo era: ${edadMadreAntes}`);
