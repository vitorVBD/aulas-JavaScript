
const fs = require('fs')

const promesaDeLeituraDoArquivo = fs.promises.readFile('tarefas.csv');

promesaDeLeituraDoArquivo
.then((arquivo) => arquivo.toString('utf8'))
.then((textoDoArquivo) => textoDoArquivo.split('\n').slice(1))
.then((linhasSemCabecalho) => linhasSemCabecalho.map((linha) => {
    const [nome, feito] = linha.split(';')
    return {
        nome,
        feito: feito.trim() === 'true'
    }
}))
.then((listaDeTarefas) => console.log(listaDeTarefas))
.catch((erro) => console.log('Deu ruim ', erro))
