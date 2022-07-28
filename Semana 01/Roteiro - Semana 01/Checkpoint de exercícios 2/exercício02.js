// Crie um programa que lê dois valores, x e y, e diz se algum desses valores é positivo.

let x = 2
let y = -5

if(x > 0 && y > 0)
    console.log("Ambos valores são positivos")
else if (x > 0 || y > 0)
    console.log("Algum desses valores é positivo")
else
    console.log("Nenhum desses valores é positivo")