// Positivo, negativo ou zero

const prompt = require("prompt-sync")();

// Entrada de dados do usuário
num = parseInt(prompt("Digite um número: "));

// Verificar se é pos, neg ou zero
if (num > 0) {
    console.log("O número", num, "é positivo \n")
} else if (num < 0 ) {
    console.log("O número", num, "é negativo \n")
} else{
        console.log("O número", num, "é zero")

}