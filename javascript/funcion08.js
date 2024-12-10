// Expresión que válida que sean números
let regex = /^[0-9]{4,6}$/
//Pedimos que se ingrese el número
let pin = prompt("Ingrese un pin. (Solo números. Entre 4 y 6):");
// Verificamos que sin pin cumple y mostramos la alerta
if (regex.test(pin)) alert("Pin válido.");
else alert("ERROR: Pin inválido.");