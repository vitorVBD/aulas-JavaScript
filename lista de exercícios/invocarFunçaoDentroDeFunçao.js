function escreverNome(name) {
    return 'Meu nome é ' + name;
}

function verificarIdadePessoa(idade) {
    if (idade >= 18) {
        console.log(escreverNome('Vitor') + ' e sou maior de idade');
    } else {
        console.log(escreverNome('Vitor') + ' e sou menor de idade');
    }
}

verificarIdadePessoa(26);
verificarIdadePessoa(15);