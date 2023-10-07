//Comandos de Decisao Aninhados
//Classificação de Triângulos

const prompt = require ("prompt-sync")();

x = parseFloat(prompt("Digite o valor de x: "));
y = parseFloat(prompt("Digite o valor de y: "));
z = parseFloat(prompt("Digite o valor de z: "));

// O comprimento de cada lado de um triângulo é menor que a soma dos comprimentos dos outros dois lados.
if ((x + y > z) && (x + y > z) && (x + y > z)) {
    //Triângulos equiláteros possuem os 3 lados iguais
    if ((x == y) && (z == y)) {
        console.log("Triângulo equilátero!");

    //Triângulos isósceles possuem pelo menos dois lados iguais
    } else if ((x == y) || (y == z) || (x == z)) {
        console.log("Triângulo isósceles!");

    //Triângulos escalenos possuem 3 lados diferentes.
    } else {
        console.log("Triângulo escaleno!");
    }
} else {
    console.log("Os lados não formam um triângulo!");
}