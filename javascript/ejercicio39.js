const pedir = (mensaje) => {
    let regex = /^[0-9]+(\.[0-9])*$/;
    while (true) {
        let num = parseFloat(prompt(`Ingrese el ${mensaje}: `));
        if (!regex.test(num)) alert("ERROR: Ingrese valores válidos.");        
        else return num;
    }
};

// función para calcular el presupuesto
const calcPresupuesto = area => area*precioMetro2;
// pedir el precio del m2
let precioMetro2 = pedir("precio por metro cuadrado");
// pedir los m2
let area = pedir("área a trabajar (m2)")
// calcular el presupuesto
let presupuesto = calcPresupuesto(area);
// mostrar el mensaje
alert(`El precio del trabajo para ${area} metros cuadrados es: $${presupuesto}` );