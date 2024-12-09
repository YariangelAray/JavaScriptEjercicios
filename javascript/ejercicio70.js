// Definimos una contraseña
const contraseña = "contraseña123";

let contraseñaIgresada;

do {
    // Pedir la contraseña
    contraseñaIgresada = prompt("Ingrese su contraseña: ");

    if(contraseña == contraseñaIgresada){ // Evaluamos que ambas contraseñas sean iguales
        alert("La contraseña es correcta.");
        break;
    }
    else{ // Por el contrario, la contraseña sera incorrecta
        alert("Contraseña incorrecta. Vuelva a intentarlo.")
    }
        
} while (contraseñaIgresada !== contraseña);