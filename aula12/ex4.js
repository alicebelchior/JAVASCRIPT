//Definição de função
function mostrar_mensagem() {
    console.log("Mensagem dentro da função")
}

function calcular_produtos(x, y, z) {
    console.log("Produto:", x * y * z)
}

function calcular_quociente(a, b) {
    return (a / b)
}

//Chamada de função mostrar_mensagem
mostrar_mensagem();

//Chamada de função calcular_produtos, passando três argumentos (parâmetros)
calcular_produtos(4, 7.5, 2.3);

//Chamado de função calcular_quociente, recebendo o retorno de valor
q = calcular_quociente(11, 5);
// console.log(q) mostra o valor de q = 2.5