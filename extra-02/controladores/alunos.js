// onde crio a as funções (lógica) que irão ser chamadas nas rotas dependendo do verbo utilizado (verbo http);
const alunos = require("../dados/alunos");
const cursosInternos = require("../dados/cursos");

function verificarTodosAlunos(req, res) {
    res.status(200);
    res.json(alunos);
}

function verificarUmAluno(req, res) {
    const id = Number(req.params.id);
    const alunoEncontrado = alunos.find(aluno => aluno.id === id);

    if(!id) {
        res.status(400);
        res.json({ erro: "O valor do parâmetro ID da URL não é um número válido." });
        return;

    } else if(!alunoEncontrado) {
        res.status(404);
        res.json({ erro: `Aluno com id ${id} não encontrado` });        
    }

    res.status(200);
    res.json(alunoEncontrado);
}

function criarAluno(req, res) {
    const proximoID = alunos[alunos.length - 1].id + 1;


// Verificando se  os campos foram preenchidos
    if(!req.body.nome) {
        res.status(404);
        res.send("O nome precisa ser preenchido!");
        return;
    }

    if(!req.body.sobrenome) {
        res.status(404);
        res.send("O sobrenome precisa ser preenchido!");
        return;
    }

    if(!req.body.idade) {
        res.status(404);
        res.send("A idade precisa ser preenchido!");
        return;
    }

    if(!req.body.curso) {
        res.status(404);
        res.send("O campo curso precisa ser preenchido!");
        return;
    }

// FIM DA VERIFICAÇÃO.


    if(typeof req.body.nome !== "string" || typeof req.body.sobrenome !== "string") {
        res.status(400);
        console.log("typeof nome " + typeof req.body.nome);
        console.log("typeof sobrenome " + typeof req.sobrenome)
        res.json({ erro: "O campo deve ser preenchido com um texo." })
        return;
    }

    if( Number(req.body.idade) < 18 ) {
        res.status(404);
        res.send("O aluno precisa ser maior de 18 anos");
        return;
    }


    const novoAluno = {
        id: proximoID,
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        idade: Number(req.body.idade),
        curso: req.body.curso
    }

    alunos.push(novoAluno);
    res.status(201);
    res.json(alunos);
}

function deletarAluno(req, res) {
    const id = Number(req.params.id);
    const indice = alunos.findIndex(aluno => aluno.id === id);

    if(!id) {
        res.status(400);
        res.json({ erro: `O id ${id} não é um ID válido....` });
    }

    if(indice === -1) {
        res.status(404);
        res.json({ erro: `O aluno com id ${id} não foi encontrado, sendo assim não consegui deletar!` });
    } else {
        alunos.splice(indice, 1);
        res.status(200);
        res.json(alunos);
    }
}


module.exports = {
    verificarTodosAlunos,
    verificarUmAluno,
    criarAluno,
    deletarAluno
}
 