// Crie um algoritmo que tem como entrada um array de notas,
// e imprime no console a média aritmética dessas notas.

let notas = [9.5, 7.8, 8];

console.log(
  notas.reduce((previousNum, currentNum) => previousNum + currentNum) / notas.length
);
