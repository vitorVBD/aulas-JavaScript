const { gets, print } = require('./funcoes-auxiliares-media');

const media = gets();

if (media < 5 && media >= 0) {
    print('Reprovado');
} else if (media >= 5 && media < 7) {
    print('Recuperação');
} else if (media >= 7 && media <= 10) {
    print('Aprovado');
} else {
    print('Nota inválida')
}