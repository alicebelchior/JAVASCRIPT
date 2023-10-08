// Mostre na tela os divisores existentes para cada um dos números no intervalo [1,10]
//WHILE

i = 1;

while (i <=10) { //divisor
    console.log("Divisores de", i);
    div = 0;
    j = 1;

    while (j <= i) { //dividendo
        if (i % j == 0) {
            console.log(j);
        }
            div++
            j++
    }
    i++
}