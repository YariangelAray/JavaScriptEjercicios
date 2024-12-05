// Función para pedir los lados
const pedir = (orden) => {

    let regex = /^[0-9-]+$/;

    while (true) {
        let num = parseInt(prompt(`Ingrese el número ${orden}: `));

        if (!regex.test(num)) alert("ERROR: Ingrese solo números");
        else return num;
    }

};

// Definimos la variable donde se define que serán 4 números y la variable suma donde se almacenará su suma
const cantNum = 4;
let suma = 0;

// Bucle for que itera según la cantidad de numeros que se soliciten y los va sumando
for (let i = 1; i <= cantNum; i++) {
    suma += pedir(i);
}

// función que retorna la media

const media = (suma, total) => suma / total;

// Se muestra el mensaje
alert("El promedio de los números es: " + media(suma, cantNum));