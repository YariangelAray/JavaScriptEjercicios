// Función para pedir los números
const pedir = () => {
    let regex = /^[0-5]+$/;
    while (true) {
        let num = prompt(`Ingrese un número (0-5): `);
        if (!regex.test(num)) alert("ERROR: Ingrese solo números válidos.");        
        else return parseInt(num);
    }
};

// función que retonra el números en su representación textual
const numeroTextual = numero =>{
    switch (numero) {
        case 0:
            return "cero";
        case 1:
            return "uno";
        case 2:
            return "dos";
        case 3:
            return "tres";
        case 4:
            return "cuatro";
        case 5:
            return "cinco";
        default:
            break;
    }
}

// Mostrar el resultado
alert("Representación Textual: " + numeroTextual(pedir()));