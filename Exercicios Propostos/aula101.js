const prompt = require("prompt-sync")();

var n = parseInt(prompt("Digite um número: "));
var divisores = 0

for (let i = 1; i <= n; i++){  //i vai variar de 1 ate n
    divisores = 0;  //se não resetar o divisores, ate os num. primos terao mais de dois divisores 

    for (let j = 1; j <= i; j++){  //n % 1, 2, 3... = 0
        if (i % j == 0) {
            divisores++;   
        }
    }

    if (divisores == 2) {
        console.log("O número", i, "é primo!");
        console.log("Quantidade de divisores: ", divisores, "\n");
    } else {
        console.log("O número", i, " NÃO é primo!");
        console.log("Quantidade de divisores: ", divisores, "\n");
    }
}