// Dado um array de números, faça um programa que imprima na tela somente os números positivos.

let arrNum = [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127];

function showPositives(arr){
    for(num of arrNum){
        if(num > 0)
            console.log(num);
    }
}

console.log(showPositives(arrNum));