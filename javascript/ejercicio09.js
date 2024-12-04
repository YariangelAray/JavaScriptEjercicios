// Pedimos la edad

let edad = parseInt(prompt("Ingrese su edad, por favor: "));

//Evaluamos que este entre los parametros especificados y mostramos el mensaje.
if (edad > 0 && edad < 4) {
    alert("Su entrada es gratis.");
}
else if (edad >= 4 && edad < 18){
    alert("Debe pagar 5€.")
}
else if (edad >= 18){
    alert("Debe pagar 10€.");
}
else{
    alert("Ingrese una edad válida, por favor.");
}



