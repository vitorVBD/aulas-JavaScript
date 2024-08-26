
const camisaPreta = true;
const camisaAzul = false;


const numero = 10;
const isNumeroPar = (numero % 2) === 0;

console.log(isNumeroPar) // usar "is" antes de uma variavel booleana por convenção

if(isNumeroPar){
    console.log('o número é par');
} else{
    console.log('o número é ímpar');
}


const num = 15;
const divisivelPorCinco = (num % 5) === 0;

if(num === 0){
    console.log('o número é inválido');
} else if(divisivelPorCinco){
    console.log('sim')
} else{
    console.log('não')
}
