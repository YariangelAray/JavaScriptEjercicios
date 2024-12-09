// Pedir la contraseña
let contraseña = prompt("Ingrese una contraseña.");

let errores = []; //Array vacío en donde se guardan los errores

// Validación de la longitud de la contraseña
let regexLargo = /^.{8,12}$/;
if (!regexLargo.test(contraseña)) errores.push(`- La contraseña debe tener un mínimo de 8 caracteres y un máximo de 12.`);

// Validación de una mayuscula
let regexMayus = /[A-Z]/;
if (!regexMayus.test(contraseña)) errores.push(`- La contraseña debe tener al menos una mayúscula.`);

// Validacion de una minuscula
let regexMinus = /[a-z]/;
if (!regexMinus.test(contraseña)) errores.push(`- La contraseña debe tener al menos una minúscula.`);

// Validación de un dígito
let regexDigit = /\d/;
if (!regexDigit.test(contraseña)) errores.push(`- La contraseña debe tener al menos un dígito.`);

//Validación de toda la contraseña completa
let regexContra = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])([^\s]){8,12}$/;
if (!regexContra.test(contraseña)) errores.push(`- La contraseña no es segura.`);

//Mostrar si la contraseña es segura o no, si no, se muestran los errores.
alert(errores.length === 0 ? "¡La contraseña es segura!" : `${errores.join(`\n`)}`);