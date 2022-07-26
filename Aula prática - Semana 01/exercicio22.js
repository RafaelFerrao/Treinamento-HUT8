let valor = 576
let notas = {'100': 0, '50': 0, '20': 0, '10': 0, '5': 0, '2': 0, '1': 0}

console.log(valor)

while(valor > 0){
   if(valor >= 100){
      valor -= 100
      notas["100"]++
   }
   else if(valor >= 50){
      valor -= 50
      notas["50"]++
   }
   else if(valor >= 20){
      valor -= 20
      notas["20"]++
   }
   else if(valor >= 10){
      valor -= 10
      notas["10"]++
   }
   else if(valor >= 5){
      valor -= 5
      notas["5"]++
   }
   else if(valor >= 2){
      valor -= 2
      notas["2"]++
   }
   else {
      valor -= 1
      notas["1"]++
   }
}

let quantidadeDeNotas

for (let nota in notas){
   quantidadeDeNotas = notas[nota]
   console.log(quantidadeDeNotas + ' nota(s) de R$ '+ nota +',00')
}

