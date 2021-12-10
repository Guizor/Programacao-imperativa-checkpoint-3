function aluno(nomeAluno, Aluno, notAluno){
    this.nome = nomeAluno,
    this.Faltas = Aluno,
    this.notas = notAluno,
    this.calcularMedia = ()=>{
        let somaNotas = 0
        this.notas.forEach(nota => {
            somaNotas += nota;
        });

        let qtdNotas = this.notas.length;

        return somaNotas/qtdNotas;
    },
    this.faltas = ()=>{
        this.Faltas +=1;
        return this.Faltas;
    }
}

module.exports = aluno;