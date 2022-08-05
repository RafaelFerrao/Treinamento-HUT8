// Crie um algoritmo que tem como entrada um número e imprime a sua tabuada do 1 ao 10.

function geraTabuada(num) {
  for (let i = 1; i < 10; i++) 
    console.log(`${num} x ${i} = ${num * i}`);
}

geraTabuada(2);
