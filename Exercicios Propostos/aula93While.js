const prompt = require ("prompt-sync")();

var soma = 0;
var digito = "s";

while (digito == "s" || digito == "S") {
    var n = parseInt(prompt("Digite um número: "));
    var digito = prompt("Quer continuar (s/n)? ");
    var soma = soma + n;
}
console.log("Soma = ", soma);
