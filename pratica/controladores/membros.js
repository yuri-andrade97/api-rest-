const membros = require('../dados/membros');


function validarMembro(membro) {
    // validação post
    if(!membro.nome) {
        return "O campo 'nome' é obrigatório.";
    }

    if(!membro.idade) {
        return "O campo 'idade' é obrigatório.";
    }

    if(!membro.personagem.nick) {
        return "O nick do personagem é uma informação fundamental!";
    }

    if(!membro.personagem.classe) {
        return "A classe do personagem é uma informação fundamental!";
    }

    if(!membro.personagem.level) {
        return "O level do personagem é uma informação fundamental!";
    }

    if(!membro.cidade) {
        return "O campo 'cidade' é obrigatório"
    }

    if(!membro.estado) {
        return "O campo 'estado' é obrigatório";
    }

    
}

function consultarMembros(req, res) {
    res.json(membros);
}

function consultarUmMembro (req, res) {

    const id = Number(req.params.idConsultado);
    
    const membroEncontrado = membros.find(membro => membro.id === id);

    if(!id) {
        console.log(id)
        res.status(404);
        res.json({ erro: " O ID deve ser um número válido" })
    }

    if(!membroEncontrado) {
        res.status(400);
        res.json({ erro: `Membro com id ${id} não foi encontrado!` })
    }

    res.json(membroEncontrado)

}

function criarMembro(req, res) {
    const proximoID = membros[membros.length - 1].id + 1;

    const erro = validarMembro(req.body);
    
    if(erro) {
        res.status(400);
        res.json({ erro });
        return;
    }

    const novoMembro = {
        id: proximoID,
        nome: req.body.nome,
        idade: Number(req.body.idade),
        personagem: {
            nick: req.body.personagem.nick,
            classe: req.body.personagem.classe,
            level: req.body.personagem.level
        },
        cidade: req.body.cidade,
        estado: req.body.estado
    }

    membros.push(novoMembro);

    res.json(membros)
}

function editarMembro(req, res) {
    const id = Number(req.params.idConsultado);
    const requisicao = req.body;
    
    const membroEncontrado = membros.find(membro => membro.id === id);

    if(membroEncontrado) {

        if(requisicao.nome) {
            membroEncontrado.nome = requisicao.nome
        }

        if(requisicao.idade) {
            membroEncontrado.idade = requisicao.idade
        } 

        if(requisicao.personagem) {

            if(requisicao.personagem.nick) { 
                membroEncontrado.personagem.nick = requisicao.personagem.nick
            }
    
            if(requisicao.personagem.classe) { 
                membroEncontrado.personagem.classe = requisicao.personagem.classe
            }
    
            if(requisicao.personagem.level) { 
                membroEncontrado.personagem.level = Number(requisicao.personagem.level)
            }
        }


        if(requisicao.cidade) {
            membroEncontrado.cidade = requisicao.cidade
        } 

        if(requisicao.estado) {
            membroEncontrado.estado = requisicao.estado
        } 
    
        res.json(membros)
    }
}

function excluirMembro(req, res) {
    const id = Number(req.params.idConsultado);
    const indice = membros.findIndex(membro => membro.id === id);

    if(!id) {
        res.status(400);
        res.json({ erro: "O ID deve ser um número válido!" });
        return
    }


    if(indice === -1) {
        res.status(404);
        res.json({ erro: `O id ${id} não foi encontrado!` })
        return
    }

    membros.splice(indice, 1);
    res.json(membros)
}


module.exports = {
    consultarMembros,
    consultarUmMembro,
    criarMembro,
    editarMembro,
    excluirMembro   
}