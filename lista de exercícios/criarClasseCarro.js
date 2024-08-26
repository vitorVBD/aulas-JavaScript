class Carro {
    marca;
    cor;
    kmPorLitro;

    constructor(marca, cor, kmPorLitro) {
        this.marca = marca;
        this.cor = cor;
        this.kmPorLitro = kmPorLitro
    }

    valorGasto(distanciaKm, precoCombustivel) {
        const valor = (distanciaKm / this.kmPorLitro) * precoCombustivel;
        console.log(valor.toFixed(2) + ' reais');
    }
}

const car1 = new Carro('mercedes', 'cinza', 6.5);

car1.valorGasto(120, 5.40);

const car2 = new Carro('fiat', 'preto', 9.2);

car2.valorGasto(45, 5.40);