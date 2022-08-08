// Crie um algoritmo que tem como entrada um array de strings e trata essas string substituindo os números por letra de acordo com a tabela
// a seguir, além disso, deve remover os espaços em branco no começo e fim da string, se existirem.
// Tabela:
// 1 : i
// 3 : e
// 4 : a
// 5 : s
// 0 : o

//Não utilizei o TRIM pois talvez saísse da proposta de como codar pra resolver esse problema "exercitando a lógica".
function removeBlankSpace(str) {
  //Remove os espaços vazios do começo
  while (str[0] == " ") {
    str = str.replace(str[0], "");
  }

  let lastIndex = parseInt(str.length - 1);

  //Remove os espaços vazios do final
  while (str[lastIndex] == " ") {
    str = str.slice(0, -1);
    lastIndex = parseInt(str.length - 1);
  }

  return str;
}

function numberToLetter(str) {
  for (let l in str) {
    switch (str[l]) {
      case "1":
        str = str.replace(str[l], "i");
        break;
      case "3":
        str = str.replace(str[l], "e");
        break;
      case "4":
        str = str.replace(str[l], "a");
        break;
      case "5":
        str = str.replace(str[l], "s");
        break;
      case "0":
        str = str.replace(str[l], "o");
        break;
    }
  }
  return str;
}

arrStrings = ["  h3ll0 w0rld", "  w3b d3v3l0p3r  ", "0tterw1s3", "j4v4scr1pt "];

// O for extrai o índice e o conteúdo de cada elemento do array
for (let [i, string] of arrStrings.entries()) {
  string = removeBlankSpace(string);
  string = numberToLetter(string);
  arrStrings[i] = string;
}

console.log(arrStrings);
