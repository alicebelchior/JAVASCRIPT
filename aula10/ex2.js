// Mostre na tela os divisores existentes para cada um dos números no intervalo [1,10]
//FOR

for (i = 1; i <=10; i++) { //divisor
    console.log("Divisores de", i);
    for (j = 1; j <= i; j++) { //dividendo
        if (i % j == 0) {
            console.log(j);
        }
    }
}