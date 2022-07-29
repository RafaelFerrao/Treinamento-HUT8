// Dado um array de nomes, faça um programa que imprima na tela todos os nomes (na mesma linha).

let arrNomes = ['Rafael', 'Guilherme', 'Cesar', 'Vinicius', 'Juathan', 'Gabriel'];
let listaNomes = '';

for(nome in arrNomes){
    if(nome != arrNomes.length - 1) 
        listaNomes += `${arrNomes[nome]}, `;
    else
        listaNomes += `${arrNomes[nome]}`;
}

console.log(listaNomes);