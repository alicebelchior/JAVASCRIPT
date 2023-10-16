/*
    Escreva um algoritmo que calcule a interseção (valores em comum) entre os valores contidos
    em dois arrays de 5 elementos, array1 e array2 (lidos pelo teclado) e armazene estes valores no array3,
    mostrando-os no final.
 */

const prompt = require("prompt-sync")();

var arr1 = [];
var arr2 = [];
var arr3 = [];

//entrada de dados
console.log("Array 1")
for (i = 0; i < 5; i++) {
    arr1.push(parseInt(prompt("Digite um número: "))); //1, 14, 2, 4, 7
}
console.log("\nArray 2")
for (i = 0; i < 5; i++) {
    arr2.push(parseInt(prompt("Digite um número: "))); //5, 6, 1, 2, 10
}

//interseção
for (i = 0; i < 5; i++) { //arr1
    for (j = 0; j < 5; j++) { //arr2
        /* i = 0
           j = 0 - 4

           i = 1
           j = 0 - 4

           i = 2
           j = 0 - 4

           i = 3
           j = 0 - 4
         */
        if (arr1[i] == arr2[j])
        arr3.push(arr1[i]1);
    }
}
console.log(arr3)