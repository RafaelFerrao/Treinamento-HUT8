// Pegue um valor de entrada e calcule o menor número de notas possíveis (cédulas) no qual o valor 
// pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. 
// A seguir mostre o valor lido e a relação de notas necessárias.

let valor = 576;

let notas = {
    1: 0,
    2: 0,
    5: 0,
    10: 0,
    20: 0,
    50: 0,
    100: 0
};

console.log(`Para decompor o valor de R$ ${valor.toFixed(2)} foram usadas: `)

for(let valorNota of Object.keys(notas).reverse()){
    while(valor >= valorNota){
        valor -= valorNota;
        notas[valorNota]++;
    }
    notas[valorNota] > 0 ? console.log(`${notas[valorNota]} nota(s) de R$ ${parseInt(valorNota).toFixed(2)}`) : null;
}

