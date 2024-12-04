1// Función para determinar el tipo de impositivo
const pagar = (impositivo) =>{
    if (impositivo >= 10000 && impositivo < 20000) return "Impositivo de tipo A (5%)";
    else if (impositivo >= 20000 && impositivo < 35000) return "Impositivo de tipo B (10%)";
    else if (impositivo >= 35000 && impositivo < 60000) return "Impositivo de tipo C (20%)";
    else if (impositivo >= 60000) return "Impositivo de tipo D (45%)";
    else return "No debe pagar Impositivo";
}

// declaración de las variables y de la expresión regular para determinar que solo se ingresen números
let impositivo;
let regex = /^(\d)+$/;

while(true) {

    // Se pide ingresar los datos
    impositivo = parseInt(prompt("¿Cuánto paga de renta anual?:"));
    // Se evalua que se cumpla con la expresión regular, en caso de que no, muestra el error, si no, rompe el ciclo
    if (!regex.test(impositivo)) {
        alert("ERROR: Por favor, solo ingrese números.");
    }
    else{
        break;
    }
}

// Muestra el mensaje
alert(pagar(impositivo));

