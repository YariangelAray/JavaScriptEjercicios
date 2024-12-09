// Función para pedir los datos
const pedir = (mensaje) => {
    let regex = /^[0-9]+(\.[0-9])*$/;
    while (true) {
        let num = parseFloat(prompt(`Ingrese ${mensaje}: `));
        if (!regex.test(num)) alert("ERROR: Ingrese solo números y que sean positivos.");
        else return num;
    }
};

// función para calcular el interes
const calcInteres = (monto, interes) => monto * (interes/100);

// pedimos los datos
let cantidadInvertir = pedir("la cantidad a invertir");
let interesAnual = pedir("el interes anual en porcentaje (sin el signo %)");
let años = pedir("la cantidad de años a invertir");

// asignamos a la variable de capital final la cantidad invertida.
let capitalFinal = cantidadInvertir;

// iteramos sobre el número de años
for (let i = 1; i <= años; i++) {
    // calculamos el interes enviando la capital final
    let interes = calcInteres(capitalFinal, interesAnual);
    // sumamos el interes al capital
    capitalFinal += interes;
    // mostramos el resultado en consola
    console.log(`Capital obtenido en el año ${i}: $${capitalFinal}`)
}

//mostramos el resultado final en una alerta
alert(`Su capital final ahora es de: ${capitalFinal} \n(Detalles en consola.)`)

