let aluno = require('./aluno');

let exportAlunos = [];

exportAlunos.push(new aluno('Rogério', 3, [8,7,8,9]));
exportAlunos.push(new aluno('Matheus Barreto', 0, [8,9,8,9]));
exportAlunos.push(new aluno('Paulo Catena', 1, [9,9,7,8]));
exportAlunos.push(new aluno('Guilherme Pereira', 2, [6,8,8,9]));
exportAlunos.push(new aluno('João Victor', 0, [10,8,7,8]));
exportAlunos.push(new aluno('Juliana Ruama', 2, [6,8,10,9]));

module.exports = exportAlunos;