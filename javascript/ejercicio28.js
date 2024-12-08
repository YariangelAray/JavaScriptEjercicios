// Función para pedir nombre, validado con una expresión que solo busca letras y espacios.
const pedirNombre = () =>{
    let regex = /([a-zA-Z]+\s*[a-zA-Z]*)+/;
    while (true) {
        let nom = prompt(`Ingrese su nombre `);
        if (!regex.test(nom)) alert("ERROR: Solo puede ingresar letras.");
        else return nom;
    }
}

// Función para pedir los números, como las horas trabajadas o el pago por hora
const pedirNumeros = (mensaje) => {
    let regex = /^[0-9]+$/;
    while (true) {
        let num = parseInt(prompt(`Ingrese ${mensaje}: `));
        if (!regex.test(num)) alert("ERROR: Solo puede ingresar números");
        else return num;
    }
};

// Llamamos a las funciones almacenando los datos
let nombre = pedirNombre();
let horasTrab = pedirNumeros("las horas trabajadas");
let pagoHora = pedirNumeros("el pago por hora");

// Calculamos el sueldo
let sueldo = horasTrab * pagoHora;

//Mostramos el resultado
alert(`Sr(a). ${nombre}. Su sueldo es de $${sueldo}.`);