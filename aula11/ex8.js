// metodo splice(): remove elementos de um array e (opcionalmente) os substitui

var arr = [1, 2, 3, 4, 5];
console.log(arr)

arr.splice(1,3, "a", "b", "c", "d");

/*
a partir do item 1, contando com mais tres itens, serão deletados e substituídos pelos itens (a...d).
    Este código iniciou no índice 1 (onde tava o nº 2), removeu 3 elementos a partir dali e, entao,
    inseriu todos os elementos consecutivos em seus lugares
 */

console.log(arr)