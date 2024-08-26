const vitor = {
    nome: 'Vitor Bittencourt',
    idade: 26,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
};

vitor.descrever(); //chamando a função do objeto

console.log(vitor.nome); //pedindo pra imprimir apenas o nome
console.log(vitor.idade); //pedindo pra imprimir apenas a idade
console.log(vitor); //pedindo pra imprimir tudo

vitor.altura = 1.78; //atribuindo novos valores ao objeto

console.log(vitor);

delete vitor.altura; //removendo valores do objeto

console.log(vitor);


const atributo = 'nome'; //acessando atributos através de strings

console.log(vitor[atributo]);
