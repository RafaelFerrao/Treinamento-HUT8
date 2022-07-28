// Levando em consideração o array [6, 21, 9, 2, 50, 98, 1]
// crie uma função que mostra o maior numero da lista

let arr = [6, 21, 9, 2, 50, 98, 1];

const getHighestValue = (arr) => arr.sort()[arr.length - 1];
console.log(getHighestValue(arr));
