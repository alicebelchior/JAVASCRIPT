// demontração do "continue"

i = 0; //var inicia com 0

while (i <= 10) {
    i++; //i = i + 1

    //checa de i = 5
    if (i % 2 == 0) { //verifica se i é multip de 2
        continue //se sim, pula essa parte
    }
    console.log(i); //imprime i
}
