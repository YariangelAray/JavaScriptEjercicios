// Función para pedir la edad
const pedir = () => {
    let regex = /^[0-9]+$/;
    while (true) {
        let edad = parseInt(prompt(`Ingrese su edad: `));
        if (!regex.test(edad) || edad < 0) alert("ERROR: Edad inválida.");
        else return edad;
    }
};

// pedimos la edad
let edad = pedir();
// damos un aviso
alert("Resultado mostrado en consola.")
// mostramos los años que ha cumplido con el bucle for
for (let i = 1; i <= edad; i++) {
    console.log(`Usted ha cumplido ${i} año(s). `);
}
