
const { gets, print } = require('./funcoes-auxiliares-salario');

const salario = gets();
const beneficio = gets();

function calcularPorcentagem(valor, percentual) {
    return valor * (percentual / 100);
}

function pegarAliquota(salario) {
    if (salario >= 0 && salario <= 1100) {
        return 5;
    } else if (salario > 1100 && salario <= 2500) {
        return 10;
    } else {
        return 15;
    }
}

let aliquotaImposto = pegarAliquota(salario);
let valorImposto = calcularPorcentagem(salario, aliquotaImposto);

let valorATransferir = salario - valorImposto + beneficio;

print(valorATransferir);