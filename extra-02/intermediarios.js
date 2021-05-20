function travaDeSenha(req, res, next) {
    const senha = req.query.senha;

    if(senha === "cubos123") {
        next();
    } else {
        res.status(401);
        res.json({ erro: " [ERRO] Senha Incorreta!" })
    }
    
}

module.exports = {
    travaDeSenha,
}


