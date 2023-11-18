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

        var numeroFormateado = (parteEntera + parteDecimal).toFixed(1); // Formatea a un decimal

        // Elimina el decimal si es ".0"
        if (numeroFormateado.slice(-2) === ".0") {
            numeroFormateado = numeroFormateado.slice(0, -2);
        }

        // Reemplaza la coma por punto si es el separador decimal
        numeroFormateado = numeroFormateado.replace(",", ".");

        return numeroFormateado;
    }



    function calcularCalorias() {
        var peso1 = parseFloat(document.getElementById("peso").value);
        var altura2 = parseFloat(document.getElementById("altura").value);
        var edad3 = parseInt(document.getElementById("edad").value);
        var genero4 = parseFloat(document.getElementById("genero").value);

        var resultado5 = 10 * peso1 + 6.25 * altura2 - 5 * edad3 + genero4;

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

        document.querySelector(".var6").innerText = formatearNumero(var6);
        document.querySelector(".var7").innerText = formatearNumero(var7);
        document.querySelector(".var8").innerText = formatearNumero(var8);
        document.querySelector(".var9").innerText = formatearNumero(var9);
        document.querySelector(".var10").innerText = formatearNumero(var10);
        document.querySelector(".var11").innerText = formatearNumero(var11);
        document.querySelector(".var12").innerText = formatearNumero(var12);
        document.querySelector(".var13").innerText = formatearNumero(var13);
        document.querySelector(".var14").innerText = formatearNumero(var14);
        document.querySelector(".var15").innerText = formatearNumero(var15);
        document.querySelector(".var16").innerText = formatearNumero(var16);
        document.querySelector(".var17").innerText = formatearNumero(var17);
        document.querySelectorAll(".var18").forEach(function (elemento) {
            elemento.innerText = formatearNumero(var19);
        });
        document.querySelectorAll(".var19").forEach(function (elemento) {
            elemento.innerText = formatearNumero(var19);
        });

        document.querySelector(".var21").innerText = formatearNumero(var21);
        document.querySelector(".var22").innerText = formatearNumero(var22);
        document.querySelector(".var23").innerText = formatearNumero(var23);
        document.querySelector(".var24").innerText = formatearNumero(var24);
        document.querySelector(".var25").innerText = formatearNumero(var25);
        document.querySelector(".var26").innerText = formatearNumero(var26);
        document.querySelector(".var27").innerText = formatearNumero(var27);
        document.querySelector(".var28").innerText = formatearNumero(var28);
        document.querySelector(".var29").innerText = formatearNumero(var29);
        document.querySelector(".var30").innerText = formatearNumero(var30);
        document.querySelector(".var31").innerText = formatearNumero(var31);
        document.querySelector(".var32").innerText = formatearNumero(var32);
        document.querySelector(".var33").innerText = formatearNumero(var33);
        document.querySelector(".var34").innerText = formatearNumero(var34);
        document.querySelector(".var35").innerText = formatearNumero(var35);
        document.querySelector(".var36").innerText = formatearNumero(var36);
        document.querySelector(".var37").innerText = formatearNumero(var37);
        document.querySelector(".var38").innerText = formatearNumero(var38);
        document.querySelector(".var39").innerText = formatearNumero(var39);
        document.querySelector(".var40").innerText = formatearNumero(var40);
        document.querySelector(".var41").innerText = formatearNumero(var41);
        document.querySelector(".var42").innerText = formatearNumero(var42);
        document.querySelector(".var43").innerText = formatearNumero(var43);
        document.querySelector(".var44").innerText = formatearNumero(var44);

        guardarValoresLocalmente();
    }

    var elementosEntrada = document.querySelectorAll("#caloriasForm input, #caloriasForm select");
    elementosEntrada.forEach(function (elemento) {
        elemento.addEventListener("input", calcularCalorias);
    });

    cargarValoresDesdeLocalStorage();
    calcularCalorias();
});
