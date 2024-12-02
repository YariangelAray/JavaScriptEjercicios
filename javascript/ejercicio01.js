// Función para pedir la edad
const pedir = () => parseInt(prompt("Hola, usuario. Por favor, ingrese su edad: "));
// Función que evalua si es mayor de edad
const mayorEdad = (edad) => edad >= 18;
// Se pide la edad
let edad = pedir();
// Evaluamos que sea positivo, si no, vuelve a pedir la edad.
while (edad < 0){
    alert("ERROR: Ingrese un número positivo o un valor válido.")
    edad = pedir();
}
// Da el resultado final, si la función mayorEdad retorna true, es mayor de edad, de lo contrario no lo es
alert(mayorEdad(edad) ? "Usted es mayor de edad." : "Usted no es mayor de edad.");