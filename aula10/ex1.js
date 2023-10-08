// mostre na tela os divisores de 10

console.log("Divisores do número 10: ");

for (var i = 1; i <= 10; i++) {
    if (10 % i == 0) {
        console.log(i);
    }
}