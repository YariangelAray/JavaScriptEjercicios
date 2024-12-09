
// Función para pedir las variables
const pedir = (variable) => {
    let regex = /^[0-9-]+(\.[0-9])*$/;
    while (true) {
        let num = parseFloat(prompt(`Ingrese la ${variable}: `));
        if (!regex.test(num)) alert("ERROR: Ingrese solo números.");        
        else return num;
    }
};

// Se piden las variables
let temperatura = pedir("temperatura");
let presion = pedir("presión");

// If que evalua si las variables 
if (presion > 200 || temperatura > 100) {
    alert("¡ALERTA!");
}
else{
    alert("Normal")
}