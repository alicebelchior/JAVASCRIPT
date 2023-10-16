/*
    Dadas duas sequências com 4 números inteiros entre 0 e 9,
    calcule a sequência de números que representa a soma das sequências anteriores.
 */

const prompt = require("prompt-sync")();

var arr1 = [];
var arr2 = [];
var arr3 = [];

//entrada de dados
console.log("Array 1")
for (i = 0; i < 4; i++) {
    arr1.push(parseInt(prompt("Digite um número (0 a 9): ")));
}
console.log("\nArray 2")
for (i = 0; i < 4; i++) {
    arr2.push(parseInt(prompt("Digite um número (0 a 9): ")));
}

for (i = 0; i < 4; i++) {
    arr3.push(arr1[i] + arr2[i]);
}
console.log(arr3)