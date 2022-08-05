// Dado o array de objetos abaixo, faça um programa que calcule a média aritmética dos estudantes e imprima no console os nomes dos estudantes aprovados. 
// A média de aprovação é 7.0.

estudantes = [
    { nome: 'Marcos', notas: [10, 7, 2] },
    { nome: 'Michele', notas: [10, 10, 10] },
    { nome: 'Pedro', notas: [3, 10, 9] },
    { nome: 'Andressa', notas: [6, 6, 8] },
    { nome: 'Cristiana', notas: [7, 9, 2] }
];

const calculaMedia = notas => {
    let media = 0;
    for (nota of notas)
        media += nota;
    media = media / notas.length
    return media
}

for (estudante of estudantes) {
    console.log(`\nNome: ${estudante.nome}`);
    console.log(`Média: ${calculaMedia(estudante.notas)}`);
}