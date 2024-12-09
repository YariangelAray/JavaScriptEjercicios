let fecha = new Date();
let añoHoy = fecha.getFullYear();

const pedir = () => {
    let regex = /^[0-9]+$/;
    while (true) {
        let año = parseInt(prompt(`Ingrese el año de nacimiento: `));
        if (!regex.test(año)) alert("ERROR: Ingrese valores válidos.");
        else if (año >  añoHoy) alert("ERROR: Ingrese un año válido.")
        else return año;
    }
};

let añoNacimiento = pedir();

const calcEdad = (añoNac, añoHoy) => añoHoy - añoNac;
let edad = calcEdad(añoNacimiento, añoHoy);

alert(`La edad es ${edad}.`);