// Crie uma função que recebe um objeto usuário e imprime se ele é maior de idade,
// utilize os conhecimentos da aula para melhorar o código

const isOveraged = (obj) => obj.age >= 18 ? true : false;

users = [
    { 'name': 'Rafael Ferrão', 'role': 'Student', 'age': 20 },
    { 'name': 'Ramon Pelle', 'role': 'Student', 'age': 17 }
];

console.log(isOveraged(users[0]));
console.log(isOveraged(users[1]));

// Teste -- Código para verificar todos os usuários da lista e retornar se são maiores de idade ou não

for (let user of users) {
    console.log(`${user.name} is overaged: ${isOveraged(user)}`);
}


//Solução com DA - creio que seja eficaz somente para obter a idade de objetos únicos

user1 = {
    'name': 'Rafael Ferrão',
    'role': 'Student',
    'age': 20
};

const isOveragedWithDA = ({ age }) => age >= 18 ? true : false;

console.log(`${user1.name} is overaged: ${isOveragedWithDA(user1)}`);


