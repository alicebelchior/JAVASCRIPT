const prompt = require("prompt-sync")();

var nome = prompt("Digite o nome do cliente: ");
var compra = parseFloat(prompt("Digite o valor da compra: R$"));

if (compra > 5000) {
    var desc = 0.15*compra;
} else if (compra < 1000) {
    var desc = 0.05*compra;
} else {
    var desc = 0.10*compra;
}

console.log("O cliente", nome,"gastou R$", compra,"e ganhou R$", desc,"de desconto")