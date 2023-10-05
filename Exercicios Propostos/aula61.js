const prompt = require("prompt-sync")();

var salBrut = parseFloat(prompt("Digite o seu salário: R$"));
var ir = parseFloat(prompt("Digite o o valro do imposto de renda: R$"));
var salLiq = salBrut - ir

console.log("O salário liquido é R$",salLiq);