const alunos = ['Vitor', 'Duda', 'João'];

console.log(alunos);

console.log(alunos[0]);
console.log(alunos[1]);


alunos.push('Maria');
console.log(alunos);

alunos[4] = 'Renan';
console.log(alunos);

alunos.pop();
console.log(alunos);

alunos.shift();
console.log(alunos);


const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(5);
notas.push(8);
notas.push(8);

console.log(notas.length);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;
console.log(media);