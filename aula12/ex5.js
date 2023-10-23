//Argumento padrão (default)
// Dois parâmetros obrigatórios, 1 variável padrão
function calc_area(x, y, z = 1) {
    area = x * y * z;
    return area;
}

raio = 2;
comprimento = 6;
largura = 9;

/*
    Calcula a área do círculo como raio * raio * pi
    Substitui o valor padrão de z(1) por pi
 */
area_circ = calc_area(raio, raio, 3.14);
console.log("Círculo", "\nRaio:", raio, "\nÁrea:", area_circ)

/*
    Calcula a área do retângulo
    Passandoo comprimento e largura, apenas 2 argumentos
 */
area_retang = calc_area(comprimento, largura);
console.log("\n\nRetângulo", "\nComprimento:", comprimento, "\nLargura:", largura, "\nÁrea:", area_retang)

// como a segunda função nao passou um valor para z, ele interpreta o calculo utilizando "z=1"
//comp * larg * z => 6 * 9 * 1 