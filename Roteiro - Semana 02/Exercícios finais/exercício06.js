// Crie uma função chamada rockPaperScissorsWinner e recebe dois valores como parâmetro. 
// Esses dois valores podem ser:
// 0: tesoura
// 1: papel
// 2: pedra
// Construa um algoritmo que recebe esses valores randomicamente e printa na tela
// qual usuário ganhou, se o usuário 1 ou usuário 2

const randomizePlayerChoice = () => Math.floor(Math.random() * 3)

function numToMove(num){
    switch(num){
        case 0:
            return 'tesoura'
        case 1:
            return 'papel'
        case 2:
            return 'pedra'
    }
}

function rockPaperScissorsWinner(p1Choice, p2Choice){
    let winner = ''

    if((p1Choice == 0 && p2Choice == 1) || (p1Choice == 1 && p2Choice == 2) || (p1Choice == 2 && p2Choice == 0))
        winner = 'vitória do Usuário 1'
    else if((p2Choice == 0 && p1Choice == 1) || (p2Choice == 1 && p1Choice == 2) || (p2Choice == 2 && p1Choice == 0))
        winner = 'vitória do Usuário 2'
    else
        winner = 'empate'
    
    console.log(`Usuário 1 jogou ${numToMove(p1Choice)}\n` +
    `Usuário 2 jogou ${numToMove(p2Choice)}\n` +
    `Resultando em ${winner}`)
}

let p1 = randomizePlayerChoice()
let p2 = randomizePlayerChoice()



rockPaperScissorsWinner(p1, p2)