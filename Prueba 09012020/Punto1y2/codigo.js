var num1, num2, resultado;

function calcular() {
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    resultado = 0;

    for (let n = 1; n <= num1; n++) {
        resultado += num2;
    }
    document.getElementById("resultado").value = resultado;
}

function arreglo() {
    var tamano = parseInt(document.getElementById("tamano").value);
    var arreglo = new Array(tamano);
    var resultado, mayor;

    for (let a = 0; a < arreglo.length; a++) {
        arreglo[a] = Math.round(Math.random() * 30);
        if (!mayor) {
            mayor = arreglo[a];
            resultado = arreglo[a];
        } else {
            resultado = resultado + " " + arreglo[a] + " ";
        }

        if (mayor < arreglo[a]) {
            mayor = arreglo[a];
        }
    }

    document.getElementById("resulAr").value = resultado;
    document.getElementById("numMayor").value = mayor;
}