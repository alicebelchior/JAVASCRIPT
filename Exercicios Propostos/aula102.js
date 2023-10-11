// "numero perfeito se é igual à soma de todos os seus fatores (divisores), excluindo ele próprio"

var n = 0;
var soma = 0;
var perfeito = 0;

while (perfeito < 3){
    n++;
    soma = 0;

    for (let j = 1; j < n; j++) { //enquanto j variar de 1 ate menos q n, ele vai mostrar se o nº é perfeito
        if (n % j == 0){
            soma = soma + j;
        }
    }

    if (soma == n){
        console.log(n, "é um número perfeito");
        perfeito++;
    }
}