// Faça uma função que recebe a idade de um nadador e retorna a categoria desse nadador de acordo com a tabela abaixo:
// Idade - Categoria
// 5 a 7 anos - Infantil A
// 8 a 10 anos - Infantil B
// 11 - 13 anos - Juvenil A
// 14 - 17 anos - Juvenil B
// Maiores de 18 anos (inclusive) - Adulto

let idade = 11
let categoria = ''

if(idade < 5)
    categoria = 'Sem Categoria'
else if (idade < 7)
    categoria = 'Infantil A'
else if (idade < 11)
    categoria = 'Infantil B'
else if (idade < 14)
    categoria = 'Juvenil A'
else if (idade < 18)
    categoria = 'Juvenil B'
else
    categoria = 'Adulto'

console.log('Você pertence a categoria: ' + categoria)