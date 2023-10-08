const prompt = require("prompt-sync")();

var n = parseInt(prompt("Digite um número: "));
var maior = 0;

while (n != 0) {
    if (n > maior) {
        var maior = n;
    }
    var n = parseInt(prompt("Digite um número: "));
}
    console.log("O maior número é", maior);
