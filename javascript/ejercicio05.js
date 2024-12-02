//Pedimos los datos
let edad = parseInt(prompt("Ingrese su edad: "));
let ingresoMens = parseInt(prompt("Ingrese sus ingresos mensuales: "));
// definimos la función para determinar si debe pagar o no
const pagar = (edad, ingreso) =>{
    if (edad > 16 && ingreso >= 1000){
        return true;
    }
    else{
        return false;
    }
}
//mostramos el resultado dependiendo de lo que retorne la función
alert(pagar(edad, ingresoMens) ? "Usted debe tributar." : "Usted no debe tributar.");

