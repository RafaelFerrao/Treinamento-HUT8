//Crie um algoritmo que imprime todos os valores de um array qualquer, menos o ultimo elemento.

let arr = ["POO", "AED", "ACTG", "PC"];

function hideLastElement(arr) {
  for (let [index, elem] of arr.entries())
    if (index != arr.length - 1) console.log(elem);
}

hideLastElement(arr);
