let carrinhoCompras = [
    {nome: 'maçã', quantidade: 2, valor: 0.5},
    {nome: 'alface', quantidade: 1, valor: 1.73},
    {nome: 'Água 5L', quantidade: 2, valor: 5.99},
    {nome: 'Pão Francês', quantidade: 8, valor: 0.63},
];

const calculaTotal = compra => {
    let total = 0;
    for(let item of compra){
        total += item.quantidade * item.valor;
    }
    return total;
}

console.log(`R$ ${calculaTotal(carrinhoCompras).toFixed(2)}`);