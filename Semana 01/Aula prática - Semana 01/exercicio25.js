let salario = 50000
let aliquota = 0

if(salario <= 21453.24){
   aliquota = 0
} else if(salario <= 32151.48){
   aliquota = 7.5
} else if(salario <= 42869.16){
   aliquota = 15
} else if(salario <= 53565.72){
   aliquota = 22.5
} else 
aliquota = 27.5

let valorImposto = salario * aliquota/100
console.log(`O valor que você deve pagar de imposto é de R$${valorImposto.toFixed(2)}`)