//Considere a seguinte definição do problema:
// Desenvolva uma função que devolva um número lido, maior que zero.

//1
const prompt = require("prompt-sync")();
function leitura() {
    x = parseInt(prompt("Digite um valor: "));
    while (x <= 0) {
        x = parseInt(prompt("Digite um valor: "));
    }
    return x;
}

//2
const prompt = require("prompt-sync")();
function leitura() {
    x = parseInt(prompt("Digite um valor: "));
    while (x <= 0)
        x = parseInt(prompt("Digite um valor: "));
    return x;
}