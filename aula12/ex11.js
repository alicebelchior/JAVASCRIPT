//Comparação de função
//declaração de função
function sum1(n1, n2) {
    return n1 + n2;
}

//declaração da função como expressão
const sum2 = function (n1, n2) {
    return n1 + n2;
}

//declaração da arrow function
const sum3 = (n1, n2) => n1 + n2;

//chamada das funções
console.log(sum1(1,2));
console.log(sum2(1,2));
console.log(sum3(1,2));