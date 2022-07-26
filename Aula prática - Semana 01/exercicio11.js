let lado1 = 10
let lado2 = 10
let lado3 = 10

if (lado1 == lado2 && lado2 == lado3)
    console.log('Triângulo equilátero')
else if (lado1 == lado2 || lado2 == lado3 || lado3 == lado1)
    console.log('Triângulo isósceles')
else 
    console.log('Triângulo escaleno')

