// función para pedir un mes válido
const pedirMes = () => {
    let regex = /^[0-9]{1,2}$/;
    while (true) {
        let mes = parseInt(prompt(`Ingrese el mes en el que nació `));
        if (!regex.test(mes) || mes < 1 || mes > 12) alert("ERROR: Ingrese un mes válido");
        else return mes;
    }
};

// pedimos el mes
let mes = pedirMes();

// Evaluamos el mes
if (mes == 1) alert(`Enero: \nCapricornio ( hasta el 19) - Acuario ( a partir del 20)`);
else if (mes == 2) alert(`Febrero: \nAcuario ( hasta el 18) - Piscis ( a partir del 19)`);
else if (mes == 3) alert(`Marzo: \nPiscis ( hasta el 20) -  Aries ( a partir del 21)`);
else if (mes == 4) alert(`Abril: \nAries ( hasta el 20) - Tauro ( a partir del 21)`);
else if (mes == 5) alert(`Mayo: \nTauro ( hasta el 20) - Géminis ( a partir del 21)`);
else if (mes == 6) alert(`Junio: \nGéminis ( hasta el 21) - Cancer ( a partir del 22)`);
else if (mes == 7) alert(`Julio: \nCancer ( hasta el 22) - Leo ( a partir del 23)`);
else if (mes == 8) alert(`Agosto: \nLeo ( hasta el 23) - Virgo ( a partir del 24)`);
else if (mes == 9) alert(`Septiembre: \nVirgo ( hasta el 22) - Libra ( a partir del 23)`);
else if (mes == 10) alert(`Octubre: \nLibra ( hasta el 22) - Escorpio ( a partir del 23)`);
else if (mes == 11) alert(`Noviembre: \nEscorpio ( hasta el 22) - Sagitario ( a partir del 23)`);
else if (mes == 12) alert(`Diciembre: \nSagitario ( hasta el 21) - Diciembre ( a partir del 22)`);