const prompt = require("prompt-sync")();

var nome = prompt("Digite seu nome: ")
var p1 = parseFloat(prompt("Digite a nota da prova 1: "));
var p2 = parseFloat(prompt("Digite a nota da prova 2: "));
var p3 = parseFloat(prompt("Digite a nota da prova 3: "));
var med = (p1+p2+p3)/3;

if (med >= 6) {
    console.log(nome, "aprovado");
} else {
    console.log(nome, "reprovado");
}