/*
1. Crie um algoritmo, utilizando a linguagem JavaScript que leia dois números.
Caso os dois números sejam positivos você deve testá-los para exibir as seguintes frases:
 Os dois números são pares;
 Os dois números são ímpares;
 Um par e um ímpar;
Se existir pelo menos um número negativo ou igual a zero, exiba a frase informando: Existe
pelo menos um número 0 ou negativo!
*/

const prompt = require("prompt-sync")();

var n1 = parseInt(prompt("Digite um número: "));
var n2 = parseInt(prompt("Digite um número: "));

if ((n1 > 0) && (n2 > 0)) {
    if ((n1%2==0)&&(n2%2==0)) {
        console.log("Os dois números são pares");
    } else if ((n1%2!=0)&&(n2%2!=0)) {
        console.log("Os dois números são ímpares");
    } else {
        console.log("Um é par, o outro, ímpar");
    }
} else {
    console.log("Existe pelo menos um número 0 ou negativo")
}
