const media =[8];
let i = 0;

function gets () {
    let valorEntradas = media[i];
    i++;
    return valorEntradas;
}


function print(texto) {
    console.log(texto);
}


module.exports = {gets, print};