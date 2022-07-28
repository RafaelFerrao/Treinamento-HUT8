// Crie um algoritmo que tem como entrada um array de números e imprime no console
// a soma dos elementos sendo cada um deles multiplicado pelo seu índice.
// Exemplo entrada: [5, 9, 10, 6]
// Exemplo Saída: 47

let arr = [5, 9, 10, 6];
let soma = 0;

function sumMultiplyByIndex(arr) {
  for (let numIndex in arr) soma += arr[numIndex] * numIndex;
  return soma;
}

console.log(sumMultiplyByIndex(arr));
