// Expresión regular
let regex = /^[0-9-e]+(\.?[0-9-e]+)$/;

// [0-9-e] -> indica que permita números, números negativos y una e 
// [0-9-e]+ -> indica que deben ser 1 o más de lo anterior
// \.? -> indica que debe coontener 0 o 1 punto. Si contiene un punto, debe obtener números
// (\.?[0-9-e]+) -> Si contiene un punto, debe obtener números, números negativos o e.
// ^...$ -> indica que lo que se ingres deberá coincidar con la expresión regular de principio a fin.

// Se pide el número;
numero =prompt("Ingrese un número flotante (por ejemplo: 2.3e-1, -3e2, 23, 3.2)");

// Se evalua si cumple con la expresión regular
if (regex.test(numero)) {
    alert("El número es válido como flotante.");
}
else {
    alert("Lo ingresado es inválido.");
}