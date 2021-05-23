function logarRequisicao(req, res, next)  {
    console.log(`Metodo -> ${req.method}\nUrl -> ${req.url}`)
    next();
}

function validacaoDeSenha(req, res, next)  {
    if(req.query.senha === "123" || req.method === "GET") {
        next();
    } else {
        res.json({ erro: "SENHA INVÁLIDA!" })
    }
}

module.exports = {
    logarRequisicao,
    validacaoDeSenha,
}