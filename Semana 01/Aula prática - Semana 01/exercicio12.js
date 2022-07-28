let nome = 'Rafael'
let servidor = false
let professor = false

if(servidor == false && professor == false)
    console.log(nome + ' infelizmente você não tem uma linha de crédito disponível.')
else if (servidor == true && professor == false)
    console.log(nome + ', você tem acesso a nossa linha de crédito para servidores.')  
else if (servidor == true && professor == true)
    console.log(nome + ', você tem acesso a nossa linha de crédito especial.') 