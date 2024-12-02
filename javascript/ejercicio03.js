// Se pide que se ingresen ambos número
let num1 = parseInt(prompt("Ingrese un número: "));
let num2 = parseInt(prompt("Ingrese un segundo número: "));
let regex = /^[0-9-]+$/; // Se define la expresión regular para que solo sean números


try {
    // Si el divisor es 0, lanza un error
    if (num2 == 0) {
        throw new Error("El divisor no puede ser 0.");        
    }
    // si los numeros son diferentes de números, lanza un error
    if (!regex.test(num1) || !regex.test(num2)){
        throw new Error("Debe ingresar solo números.");        
    }

    // Se dividen los números
    let division = num1/num2;
    alert(`La división de los números es: ${division}` );

} catch (error) {
    // Se muestra el error
    alert("ERROR: " + error.message);
}