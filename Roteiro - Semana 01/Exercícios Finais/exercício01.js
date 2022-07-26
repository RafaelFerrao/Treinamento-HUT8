// Faça uma função que recebe um valor inteiro e verifica se o valor é par. 
// A função deve retornar um valor booleano se for par.

function ehPar(num){
    if(num % 2 == 0)
        return true
    else
        return false
}

console.log(ehPar(5))
console.log(ehPar(10))