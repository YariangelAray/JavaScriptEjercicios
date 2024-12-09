// Función para pedir el número
const pedir = () => {
    let regex = /^[0-9-]+(\.[0-9])*$/;
    while (true) {
        let num = parseFloat(prompt(`Ingrese un número: `));
        if (!regex.test(num)) alert("ERROR: Ingrese solo números.");        
        else return num;
    }
};

// Guardamos el número en una variable
let numero = pedir();

// Función para evaluar el número
const evaluarNum = num =>{
    if (num >= 0 && num < 100) return "El número es positivo y menor que 100.";
    else return "El número es negativo o mayor o igual que 100";
}

//mostramos el resultado
alert(evaluarNum(numero));