
const conjuntoDeEntradas = [10, 5, 50, 10, 98, 23, 102, 65, 89, 130];
let i = 0;

function gets () {
    let valorEntradas = conjuntoDeEntradas[i];
    i++;
    return valorEntradas;
}


function print(texto) {
    console.log(texto);
}


module.exports = {gets, print}; //exportando as funções dentro de um objeto