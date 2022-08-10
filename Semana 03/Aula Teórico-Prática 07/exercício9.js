// Dado a lista de compras a seguir, faça um programa que imprime no console o valor total.
// Atenção, o valor de cada item é unitário.


let carrinhoCompras = [
    { nome: 'maçã', quantidade: 2, valor: 0.5 },
    { nome: 'alface', quantidade: 1, valor: 1.73 },
    { nome: 'Água 5L', quantidade: 2, valor: 5.99 },
    { nome: 'Pão Francês', quantidade: 8, valor: 0.63 }
];

const calculaTotal = obj => {
    let total = 0;
    for(let {quantidade, valor} of obj){
        total += valor * quantidade;
    }
    return total;
}

console.log(`O total das compras foi R$ ${calculaTotal(carrinhoCompras).toFixed(2)}`);

