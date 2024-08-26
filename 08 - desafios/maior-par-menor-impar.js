
const { gets, print } = require('./funcoes-auxiliares-parimpar');

const n = gets();
let maiorPar = null;
let menorImpar = null;

for (i = 0; i < n; i++) {
    const numero = gets();

    if (numero % 2 === 0) {
        if (maiorPar === null || numero > maiorPar) {
            maiorPar = numero;
        }

    } else {
        if (menorImpar === null || numero < menorImpar) {
            menorImpar = numero;
        }
    }
}


print(`O maior par é ${maiorPar} e o menor impar é ${menorImpar}`);