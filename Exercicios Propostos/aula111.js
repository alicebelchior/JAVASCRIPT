/*
    Leia 8 números inteiros do usuário e armazene-os em uma coleção indexada (array).
    Depois, calcule a média desses valores. Ao final, exiba todos os números do array maiores que a média calculada
 */

const prompt = require("prompt-sync")();

var arr = [];
var media;
var sum = 0;
var numMenor

//entrada de dados
for (i = 0; i < 8; i++) {
    arr.push(parseInt(prompt("Digite um número: ")));
    sum = sum + arr[i];
}

//processamento dos dados
media = sum / 8;
console.log(media)

for (i = 0; i < 8; i++) {
    if (arr[i] > media) {
        console.log(arr[i])
    }
}