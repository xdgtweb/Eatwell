document.addEventListener("DOMContentLoaded", function () {

    function cargarValoresDesdeLocalStorage() {
        document.getElementById("peso").value = localStorage.getItem("peso") || "";
        document.getElementById("altura").value = localStorage.getItem("altura") || "";
        document.getElementById("edad").value = localStorage.getItem("edad") || "";
        document.getElementById("genero").value = localStorage.getItem("genero") || "";
    }

    function guardarValoresLocalmente() {
        localStorage.setItem("peso", document.getElementById("peso").value);
        localStorage.setItem("altura", document.getElementById("altura").value);
        localStorage.setItem("edad", document.getElementById("edad").value);
        localStorage.setItem("genero", document.getElementById("genero").value);
    }

    function formatearNumero(numero) {
        if (isNaN(numero) || !isFinite(numero)) {
            return "";
        }

        var parteEntera = Math.floor(numero);
        var parteDecimal = numero - parteEntera;

        // Redondea la parte decimal según tu regla
        if (parteDecimal <= 0.3) {
            parteDecimal = 0;
        } else if (parteDecimal <= 0.7) {
            parteDecimal = 0.5;
        } else {
            parteDecimal = 1;
        }

        // Formatea a un decimal
        var numeroFormateado = (parteEntera + parteDecimal).toFixed(1);

        // Elimina el decimal si es ".0"
        if (numeroFormateado.slice(-2) === ".0") {
            numeroFormateado = numeroFormateado.slice(0, -2);
        }

        // Reemplaza la coma por punto si es el separador decimal
        numeroFormateado = numeroFormateado.replace(".", ",");

        return numeroFormateado;
    }


    function aplicarEstiloDecimal(elemento, numero) {
        var partes = numero.split(",");
        if (partes.length === 2) {
            // Solo aplica el estilo si hay parte decimal
            elemento.innerHTML = partes[0] + ",<span style='font-size: 8px;'>" + partes[1] + "</span>";
        } else {
            // No hay parte decimal, no se aplica el estilo
            elemento.innerText = numero;
        }
    }




    function calcularCalorias() {
        var peso1 = parseFloat(document.getElementById("peso").value);
        var altura2 = parseFloat(document.getElementById("altura").value);
        var edad3 = parseInt(document.getElementById("edad").value);
        var genero4 = parseFloat(document.getElementById("genero").value);
        var resultado5 = 10 * peso1 + 6.25 * altura2 - 5 * edad3 + genero4;
console.log(peso1, altura2, edad3);
        var var6 = resultado5 * 1.55;
        var var7 = resultado5 * 1.85;
        var var8 = resultado5 * 2.2;
        var var9 = resultado5 * 2.4;
        var var10 = var6 - 500;
        var var11 = var7 - 500;
        var var12 = var8 - 500;
        var var13 = var9 - 500;
        var var14 = var6 + 500;
        var var15 = var7 + 500;
        var var16 = var8 + 500;
        var var17 = var9 + 500;
        var var18 = peso1 * 2;
        var var19 = peso1 * 3;
        const const20 = 0.03333;
        var var21 = const20 * var6;
        var var22 = const20 * var7;
        var var23 = const20 * var8;
        var var24 = const20 * var9;
        var var25 = const20 * var10;
        var var26 = const20 * var11;
        var var27 = const20 * var12;
        var var28 = const20 * var13;
        var var29 = const20 * var14;
        var var30 = const20 * var15;
        var var31 = const20 * var16;
        var var32 = const20 * var17;
        var var33 = (var6 - (var19 * 4) - (var21 * 9)) / 4;
        var var34 = (var7 - (var19 * 4) - (var22 * 9)) / 4;
        var var35 = (var8 - (var19 * 4) - (var23 * 9)) / 4;
        var var36 = (var9 - (var19 * 4) - (var24 * 9)) / 4;
        var var37 = (var10 - (var19 * 4) - (var25 * 9)) / 4;
        var var38 = (var11 - (var19 * 4) - (var26 * 9)) / 4;
        var var39 = (var12 - (var19 * 4) - (var27 * 9)) / 4;
        var var40 = (var13 - (var19 * 4) - (var28 * 9)) / 4;
        var var41 = (var14 - (var19 * 4) - (var29 * 9)) / 4;
        var var42 = (var15 - (var19 * 4) - (var30 * 9)) / 4;
        var var43 = (var16 - (var19 * 4) - (var31 * 9)) / 4;
        var var44 = (var17 - (var19 * 4) - (var32 * 9)) / 4;

        aplicarEstiloDecimal(document.querySelector(".var6"), formatearNumero(var6));
        aplicarEstiloDecimal(document.querySelector(".var7"), formatearNumero(var7));
        aplicarEstiloDecimal(document.querySelector(".var8"), formatearNumero(var8));
        aplicarEstiloDecimal(document.querySelector(".var9"), formatearNumero(var9));
        aplicarEstiloDecimal(document.querySelector(".var10"), formatearNumero(var10));
        aplicarEstiloDecimal(document.querySelector(".var11"), formatearNumero(var11));
        aplicarEstiloDecimal(document.querySelector(".var12"), formatearNumero(var12));
        aplicarEstiloDecimal(document.querySelector(".var13"), formatearNumero(var13));
        aplicarEstiloDecimal(document.querySelector(".var14"), formatearNumero(var14));
        aplicarEstiloDecimal(document.querySelector(".var15"), formatearNumero(var15));
        aplicarEstiloDecimal(document.querySelector(".var16"), formatearNumero(var16));
        aplicarEstiloDecimal(document.querySelector(".var17"), formatearNumero(var17));

        document.querySelectorAll(".var18").forEach(function (elemento) {
            elemento.innerText = formatearNumero(var18);
        });
        document.querySelectorAll(".var19").forEach(function (elemento) {
            elemento.innerText = formatearNumero(var19);
        });

        aplicarEstiloDecimal(document.querySelector(".var21"), formatearNumero(var21));
        aplicarEstiloDecimal(document.querySelector(".var22"), formatearNumero(var22));
        aplicarEstiloDecimal(document.querySelector(".var23"), formatearNumero(var23));
        aplicarEstiloDecimal(document.querySelector(".var24"), formatearNumero(var24));
        aplicarEstiloDecimal(document.querySelector(".var25"), formatearNumero(var25));
        aplicarEstiloDecimal(document.querySelector(".var26"), formatearNumero(var26));
        aplicarEstiloDecimal(document.querySelector(".var27"), formatearNumero(var27));
        aplicarEstiloDecimal(document.querySelector(".var28"), formatearNumero(var28));
        aplicarEstiloDecimal(document.querySelector(".var29"), formatearNumero(var29));
        aplicarEstiloDecimal(document.querySelector(".var30"), formatearNumero(var30));
        aplicarEstiloDecimal(document.querySelector(".var31"), formatearNumero(var31));
        aplicarEstiloDecimal(document.querySelector(".var32"), formatearNumero(var32));
        aplicarEstiloDecimal(document.querySelector(".var33"), formatearNumero(var33));
        aplicarEstiloDecimal(document.querySelector(".var34"), formatearNumero(var34));
        aplicarEstiloDecimal(document.querySelector(".var35"), formatearNumero(var35));
        aplicarEstiloDecimal(document.querySelector(".var36"), formatearNumero(var36));
        aplicarEstiloDecimal(document.querySelector(".var37"), formatearNumero(var37));
        aplicarEstiloDecimal(document.querySelector(".var38"), formatearNumero(var38));
        aplicarEstiloDecimal(document.querySelector(".var39"), formatearNumero(var39));
        aplicarEstiloDecimal(document.querySelector(".var40"), formatearNumero(var40));
        aplicarEstiloDecimal(document.querySelector(".var41"), formatearNumero(var41));
        aplicarEstiloDecimal(document.querySelector(".var42"), formatearNumero(var42));
        aplicarEstiloDecimal(document.querySelector(".var43"), formatearNumero(var43));
        aplicarEstiloDecimal(document.querySelector(".var44"), formatearNumero(var44));

        guardarValoresLocalmente();
    }

    var peso1Actual = document.getElementById("peso").value;
    setInterval(function () {
        var peso1Nuevo = document.getElementById("peso").value;

        if (peso1Nuevo !== peso1Actual) {
            peso1Actual = peso1Nuevo;
            calcularCalorias();
        }
    }, 10);

    var altura2Actual = document.getElementById("altura").value;
    setInterval(function () {
        var altura2Nuevo = document.getElementById("altura").value;

        if (altura2Nuevo !== altura2Actual) {
            altura2Actual = altura2Nuevo;
            calcularCalorias();
        }
    }, 10);

    var edad3Actual = document.getElementById("edad").value;
    setInterval(function () {
        var edad3Nuevo = document.getElementById("edad").value;

        if (edad3Nuevo !== edad3Actual) {
            edad3Actual = edad3Nuevo;
            calcularCalorias();
        }
    }, 10);

    var elementosEntrada = document.querySelectorAll("#caloriasForm input, #caloriasForm select");
    elementosEntrada.forEach(function (elemento) {
        elemento.addEventListener("input", calcularCalorias);
    });

    cargarValoresDesdeLocalStorage();
    calcularCalorias();
});
