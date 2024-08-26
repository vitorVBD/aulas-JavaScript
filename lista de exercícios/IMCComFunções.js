
function calcularIMC(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do peso';
    } else if (imc >= 30 && imc < 40) {
        return 'Obeso';
    } else {
        return 'Obesidade grave';
    }
}

(function () {
    const peso = 78;
    const altura = 1.78;

    const imc = calcularIMC(peso, altura); // Math.pow(variavel, potencia) -> para fazer variavies ou valores a potencias
    console.log('seu IMC é: ' + calcularIMC(peso, altura).toFixed(2));
    console.log(classificarImc(imc));
})(); //função invocada imediatamente
