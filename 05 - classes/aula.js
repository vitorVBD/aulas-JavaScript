class Pessoa {
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`);
    }
}

const vitor = new Pessoa();
vitor.nome = 'Vitor Bittencourt';
vitor.idade = 26;

const duda = new Pessoa();
duda.nome = 'Duda Mattos';
duda.idade = 24;

console.log(vitor);
console.log(duda);

vitor.descrever();
duda.descrever();


//usando constructor

class Pessoa2 {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade
        this.anoDeNascimento = 2024 - idade;
    }

    descrever2() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`);
    }
}

const laura = new Pessoa2('Laura Bittencourt', 17);
const heitor = new Pessoa2('Heitor Bittencourt', 5);

laura.descrever2();
heitor.descrever2();

console.log(laura);