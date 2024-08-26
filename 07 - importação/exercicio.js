

const {gets, print} = require('./funcoes-auxiliares');

const quantidadeDeAlunos = gets();
let numerosSorteados = [];

for (let i = 0; i < quantidadeDeAlunos; i++) {
    let numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);
}

let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    let numeroSorteado = numerosSorteados[i];
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
    }
}

print(maiorValor);