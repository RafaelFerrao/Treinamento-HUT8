// Através da string “Maria, Paulo, Moisés, Joel, Ana”, 
// imprima todos os nomes um em cada linha no console

let str = "Maria, Paulo, Moisés, Joel, Ana";

str = str.split(",");

for(let i in str){
    str[i] = str[i].trim();
    console.log(str[i]);
}