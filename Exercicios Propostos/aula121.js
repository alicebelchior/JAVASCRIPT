//Definir a função de calculo do IMC
function calcularIMC (peso, altura) {
    let imc;
    imc = peso / (altura * altura);
    return imc;
}

//Definir a função para verificar situação
function verfiicarSitu(codigo) {
    let codigo;
    if (imc < 18.5) {
        codigo = 1;
    } else if (imc <= 24.9) {
        codigo = 2;
    } else if (imc <= 29.9) {
        codigo = 3;
    } else {
        codigo = 4;
    }
    return codigo;
}

//Definir procedimento (é uma espécie de função que nao retorna valor)
function exibirDescricao(codigo) {
    if (codigo = 1) {
        console.log("Você está abaixo do peso ideal!");
    } else if (codigo = 2) {
        console.log("Parabéns! Você está em seu peso normal!");
    } else if (codigo = 3) {
        console.log("Você está acima de seu peso (sobrepeso)!");
    } else {
        console.log("Obesidade!");
    }    
}