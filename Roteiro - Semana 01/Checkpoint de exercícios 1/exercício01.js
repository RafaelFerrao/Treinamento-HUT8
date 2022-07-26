// Crie letiáveis para armazenar algumas informações de cadastro de um estudante,
// são elas: nome, sobrenome, dia do nascimento, mês do nascimento, ano do nascimento, 
// primeira nota e segunda nota. A partir dessas informações, você devemostrar um 
// relatório na tela da seguinte forma: Nome Completo, Idade, Data de Nascimento e Média:

let nome = 'Rafael'
let sobrenome = 'Ferrão'
let diaNasc = 06
let mesNasc = 10
let anoNasc = 2001
let nota1 = 8
let nota2 = 9.8

let dataNascimento = new Date(`${mesNasc}/${diaNasc}/${anoNasc}`)
let diferença = Date.now() - dataNascimento.getTime() 
let diferencaIdade = new Date(diferença)
let ano = diferencaIdade.getUTCFullYear()
let idade = (ano - 1970)

let media = (8 + 9.8)/2

console.log('Nome completo: ' + nome + ' ' + sobrenome)
console.log('Idade: ' + idade)
console.log('Média: ' + media)

