// Dado um array de nomes, faça um programa que imprima na tela todos os nomes (na mesma linha).

arrnames = ['Rafael Ferrão', 'Ramon Pelle', 'Vinicius Munchow'];
nomesLinha = '';

for(let [idx, name] of arrnames.entries()){
    idx != arrnames.length-1 ? nomesLinha += name + ', ' : nomesLinha += name; 
}

console.log(nomesLinha);