/*e receber os seguintes valores: modelo do carro, número de quilômetros
percorridos e número de litros de combustível gastos no percurso.*/

const prompt = require("prompt-sync")();

//Entrada de dados
var carro = prompt("Digite o modelo do carro: ");
var dist = parseFloat(prompt("Digite a distância percorrida: "));
var gas = parseFloat(prompt("Quantos litros de gasolina foram consumidos? "));

// encontrar o consumo (km/litro) do carro
var cons = dist / gas;
console.log("O consumo do carro", carro, " é de", cons, " litros")