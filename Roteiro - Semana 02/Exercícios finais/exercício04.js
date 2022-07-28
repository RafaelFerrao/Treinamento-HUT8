// Crie uma função que conte quantas palavras existem na frase que for passada como
// parâmetro (dica: utilizem o método split de string)

let frase = "Somos a Hut8, empresa júnior da computação associada a Universidade Federal de Pelotas";
const contaPalavra = (str) => str.split(" ").length;
console.log(contaPalavra(frase));
