function teste() {
    console.log('teste');
}

teste();
teste();


function sayMyName(name) {
    console.log('Your name is ' + name);
}

sayMyName('Vitor');
sayMyName('Duda');


function quadrado(valor) {
    return valor * valor;
}

const quadradoDe10 = quadrado(10);
console.log(quadradoDe10);

console.log(quadrado(10) + quadrado(10));


function incrementarjuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}

console.log(incrementarjuros(100, 15));
console.log(incrementarjuros(450, 20));



//usar os códigos principais numa função main e chamar funções necessárias dentro da main



function calcularJuros() {

}


function main() {
    console.log('Programa pincipal');
    calcularJuros();
}

main();