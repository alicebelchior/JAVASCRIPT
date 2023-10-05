/*
Crie um algoritmo, utilizando a linguagem JavaScript, que receba pelo teclado os valores
dos três ângulos internos de um triângulo. Depois verifique se é triângulo, de acordo com a
Propriedade.
Caso não seja triângulo mostre uma mensagem “Não é triângulo!”.
Caso seja triângulo, mostre a classificação do triângulo quanto aos ângulos:
 “Acutângulo” (três ângulos agudos)
 “Retângulo” (um ângulo reto)
 “Obtusângulo” (um ângulo obtuso)
Propriedades:
1. A soma dos ângulos de um triângulo deve ser igual a 180 graus
2. Ângulo agudo: menor do que 90 graus
3. Ângulo reto: exatamente 90 graus
4. Ângulo obtuso: maior que 90 graus e menor que 180 graus
*/

const prompt = require("prompt-sync")();

var x = parseInt(prompt("Digite o valor do ângulo x: "));
var y = parseInt(prompt("Digite o valor do ângulo y: "));
var z = parseInt(prompt("Digite o valor do ângulo z: "));

if ((x+y+z <= 180)) {
    if ((x < 90) || (y < 90) || (z < 90)) {
        console.log("Acutângulo");
    } else if ((x == 90) || (y == 90) || (z == 90)) {
        console.log("Retângulo");
    }
    else {
        console.log("Obtusângulo")
    }
} else{
    console.log("Não é triângulo")
}