// Dado um array de nomes, faça um programa quetenha como entrada um valor a ser
// pesquisado e retorne se o nome existe ou não no array

let listaNomes = [
  "Juliana",
  "Pedro",
  "Regina",
  "João",
  "Patrícia",
  "Gabriel",
  "Carlos",
  "Carla",
];
let nomeProcurado = "Ferrão";

listaNomes.includes(nomeProcurado)
  ? console.log(`O nome ${nomeProcurado} existe no array`)
  : console.log(`O nome ${nomeProcurado} não existe no array`);
