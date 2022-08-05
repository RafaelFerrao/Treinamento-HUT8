// Dado um array de números, mostre quantos valores são pares, quantos são
// ímpares, quantos são positivos e quantos são negativos.

let arrNum = [-5, 0, -3, -4, 12];
let quantNeg = 0;
let quantPos = 0;
let quantPar = 0;
let quantImp = 0;

function contaPropriedades(arr) {
  for (num of arrNum) {
    if (num > 0) 
        quantPos++;
    else if (num < 0) 
        quantNeg++;

    if (num % 2 == 0) 
        quantPar++;
    else 
        quantImp++;
  }
  console.log(`${quantPar} valor(es) par(es)\n${quantImp} valor(es) impar(es)\n${quantPos} valor(es) positivo(s)\n`+
            `${quantNeg} valor(es) negativo(s)`);
}

contaPropriedades(arrNum)


