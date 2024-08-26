class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calculoImc() {
        return this.peso / (this.altura * this.altura);
    }

    classificarImc() {
        const imc = this.calculoImc();
        if (imc < 18.5){
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
    }

const pessoa1 = new Pessoa('Vitor', 78, 1.78);
console.log(pessoa1.calculoImc().toFixed(2));

const pessoa2 = new Pessoa('Duda', 48, 1.52);
console.log(pessoa2.calculoImc().toFixed(2));

const pessoa3 = new Pessoa('José', 70, 1.75);
console.log(`Me chamo ${pessoa3.nome} e meu imc é de ` + pessoa3.calculoImc().toFixed(2));

console.log(pessoa1.classificarImc());
console.log(pessoa2.classificarImc());
console.log(pessoa3.classificarImc());