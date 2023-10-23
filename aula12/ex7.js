//Escopo de variável global e lcal
var a = 1; //variável global

function f1() {
    var b = 2; //var local, só pode ser referenciado nessa função
    console.log("f1() - a:", a);
    console.log("f1() - b:", b);
}

function f2() {
    console.log("f2() - a:", a);
    console.log("f2() - b:", b); //erro
}

//chamado de função
f1();
f2();

console.log("a:", a);
console.log("b:", b);  //erro