function calcularCalorias() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var edad = parseInt(document.getElementById("edad").value);
    var genero = parseFloat(document.getElementById("genero").value);
    var actividad = parseFloat(document.getElementById("actividad").value);
    var objetivo = parseFloat(document.getElementById("objetivo").value);

    var resultado = (10 * peso + 6.25 * altura - 5 * edad + genero) * actividad + objetivo;

    document.getElementById("resultado").innerText = "Número de calorías recomendadas por día: " + resultado.toFixed(2);
}