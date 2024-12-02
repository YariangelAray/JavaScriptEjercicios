// Definimos una contraseña
const contraseña = "yari0421";
// Pedir la contraseña
let contraseñaIgresada = prompt("Ingrese su contraseña: ").toLowerCase();
// Expresión regular
let regex = /^(\w)+$/;

// Evaluamos que con al expresión regular que la contraseña solo tenga alfanuméricos
if (!regex.test(contraseñaIgresada)) {
    alert("La contraseña solo debe contener caracteres alfanuméricos.")
}else if(contraseña == contraseñaIgresada){ // Si la contraseña contiene alfanumericos, devolvemos el valor falso para que ahora se evalue que ambas contraseñas sean iguales
    alert("La contraseña es correcta.");
}
else{ // Por el contrario, la contraseña sera incorrecta
    alert("Contraseña incorrecta.")
}