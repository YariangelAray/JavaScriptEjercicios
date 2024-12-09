// Función para pedir los saldos 
const pedir = () => {
    let regex = /^[0-9]+(\.[0-9])*$/;
    while (true) {
        let num = parseFloat(prompt(`Ingrese el saldo: `));
        if (!regex.test(num)) alert("ERROR: Ingrese solo números.");        
        else return num;
    }
};

// función para sacar el interes
const calcInteres = (saldo, interes) => saldo * (interes/100);

// se pide el saldo
let saldo = pedir();
let interes;

// se evalua si el saldo es menor a 100000
if (saldo < 100000) interes = 3;
else interes = 4;

// se calcula el sueldo final
let saldoInteres = calcInteres(saldo, interes);
let saldoFinal = saldo + saldoInteres;

// se mstra el resultado
alert(`El interes aplicado al saldo es ${interes} % => $ ${saldoInteres}
El saldo final es: $${saldoFinal}`);