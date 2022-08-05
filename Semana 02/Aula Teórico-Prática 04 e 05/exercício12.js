// Dado um array de números, faça um programa que encontre o menor elemento deste array e sua posição.
// Mostre as informações encontradas no console.

let arrNum = [1, 2, 3, 4, -5, 6, 7, 8, 9, 10];

function findLowestValue(arr) {
  let lowestValue;
  let lowestIndex;
  for (let [indx, value] of arr.entries()) {
    if (indx == 0) 
        lowestValue = value;
    else if (lowestValue > value) {
        lowestValue = value;
        lowestIndex = indx;
    }
  }
  return [lowestIndex, lowestValue];
}

let menorElemento = findLowestValue(arrNum);

console.log(`O menor elemento deste array é ${menorElemento[1]}\nA posição ${menorElemento[0]}`);
