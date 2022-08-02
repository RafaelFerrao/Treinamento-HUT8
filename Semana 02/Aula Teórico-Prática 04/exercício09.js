// Dado um número, faça um algoritmo que imprime no console a soma de todos os números
// de 1 até o número escolhido. Ex: Ao ter como entrada o valor 5, devem ser somados
// todos os números de 1 até 5 (1+2+3+4+5).

let finalNum = 5;
let sum = 0;

for (finalNum; finalNum > 0; finalNum--) 
    sum += finalNum;

console.log(sum);
