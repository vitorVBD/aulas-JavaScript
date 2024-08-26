

const funcoes = require('./funcoes-auxiliares'); //importanto as funções dentro da variavel funcoes


console.log(funcoes.gets());


const { gets, print } = require('./funcoes-auxiliares'); //object destructuring -> criando 2 variaveis (gets e print) que vão receber as funções separadamente

print(gets());