// Dado um array de números como entrada, faça um programa que multiplique todos os valores por 10

let arrNum = [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3];

const multiplicaArray = (arr) => arr.map((e) => e * 10);

console.log(multiplicaArray(arrNum));
