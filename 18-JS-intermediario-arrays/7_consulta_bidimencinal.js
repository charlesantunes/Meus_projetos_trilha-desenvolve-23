const listaAlunos = ['João','Júlia','Ana','Caio','Lara','Majorie','Guilherme','Aline','Fabiana', 'Andre','Carlos','Paulo','Bia','Vivian','Isabela','Vinícius','Renan','Renata','Daisy','Camilo'];
const notasAlunos = [10,7,5,10,7,5,10,7,5,10,7,5,10,7,5,10,7,5,10,7];

const listaNotasAlunos = [listaAlunos,notasAlunos]
//const alunoConsultado = listaNotasAlunos[0].includes('Bia') // Include varre o array e verifica se tem 'Bia' e retorna true ou false.

const consultaAluno = (nomeAluno) =>{
    // Include varre o array e verifica se tem 'Bia' e retorna true ou false.
    if (listaNotasAlunos[0].includes(nomeAluno)) {
        const i = listaNotasAlunos[0].indexOf(nomeAluno)
        return console.log(`O aluno(a) ${nomeAluno} obteve a nota ${listaNotasAlunos[1][i]}`);
       
    } else {
        return console.log(`O aluno(a) ${nomeAluno} não existe ou não está cadastrado`)
    }
}

consultaAluno('Charles')


