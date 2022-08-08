function formataCpf(cpf) {
    cpf = cpf.split('');
    //Pegamos a string transformada em array e passamos a utilizar o splice pra inserir os caracteres
    //nos locais padrões de suas respectivas posições no CPF.
    for (let i = 3; i <= 11; i += 4)
        (i == 3 || i == 7) ? cpf.splice(i, 0, '.') : cpf.splice(i, 0, '-');
    return cpf.join('');
}

function formataNome(nome) {
    nome = nome.split(' ');
    for (let [index, palavra] of nome.entries()) {
        palavra = palavra.trim(); // Elimina os espaços vazios nas palavras
        //Teste para eliminar alguns espaços vazios que são confundidos por palavras por conta do separador do split
        if (palavra != '') {
            if (palavra != 'das' && palavra != 'dos' && palavra != 'da' && palavra != 'do' && palavra != 'de') {
                palavra = palavra.charAt(0).toUpperCase() + palavra.slice(1);
                nome[index] = palavra;
            }
        }
        else
            nome.splice(index, 1);

    }

    return nome.join(' ');
}

function formataTel(tel) {
    tel = tel.split('')
    tel.splice(0, 0, '(');
    tel.splice(3, 0, ')');
    tel.splice(4, 0, ' ');
    tel.splice(tel.length - 4, 0, '-');
    return tel.join('');
}


let usr1 = { nome: 'Analu dos santos baptista', cpf: '14776213931', telefone: '8328008258' };
let usr2 = { nome: 'Cláudio  da silva figueiredo ', cpf: '47187999887', telefone: '11988754092' };

const mostraDados = usr => console.log(`\n${formataNome(usr.nome)}\n${formataCpf(usr.cpf)}\n${formataTel(usr.telefone)}`);

mostraDados(usr1);
mostraDados(usr2);






