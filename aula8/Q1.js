/*A legislação de trânsito do Brasil permite que apenas pessoas com no mínimo 18 anos possam habilitar-se para dirigir.
Considere que exista uma variável idade e você deverá testar se o usuário pode dirigir ou não.
Em seguida, exibir uma mensagem correspondente à sua situação.
 */

const prompt = require ("prompt-sync")();

idade = parseInt(prompt("Digite sua idade: "));

if (idade < 18) {
    console.log("Não pode tirar carteira de habilitação");
} else {
    console.log("Pode tirar carteira de habilitação");
}