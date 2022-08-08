// Crie uma função que recebe uma string (com quatro possibilidades: “soma”,“subtrai”, “divide”, “multiplica”) e dois números. 
// A função deve retornar a operação realizada informada pela string nos dois números.

function fazOperacao(op) {
    switch (op) {
        case 'soma':
            return function (a) {
                return function (b) {
                    return a + b;
                }
            }
        case 'subtrai':
            return function (a) {
                return function (b) {
                    return a - b;
                }
            }
        case 'multiplica':
            return function (a) {
                return function (b) {
                    return a * b;
                }
            }
        case 'divide':
            return function (a) {
                return function (b) {
                    return a / b;
                }
            }
    }

}

console.log(fazOperacao('divide')(1)(2))