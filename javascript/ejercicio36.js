// Se define la cantidad de gramos de chocolate
let gramosChocolate = 20;
// función para calcular la cantidad de gramos de harina
const calcHarina = gramosChocolate => gramosChocolate*100/10;
// se guarda lo retornado en una variable
let gramosHarina = calcHarina(gramosChocolate);
// se muestra el resultado
alert("La cantidad de gramos de harina es: " + gramosHarina)