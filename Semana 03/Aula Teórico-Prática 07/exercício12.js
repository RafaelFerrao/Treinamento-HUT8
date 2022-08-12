// Faça um programa que recebe um array e uma função como parâmetro e percorre todo o 
// array aplicando a função em cada um dos elementos do array.

function aplicaFuncaoNoArr(arr, func) {
    for (let [index, e] of arr.entries()) {
        arr[index] = func(e);
    }
    return arr;
}

const multiplicaPor10 = num => num * 10;

console.log(aplicaFuncaoNoArr([1, 2, 3, 4, 5, 10], multiplicaPor10));

