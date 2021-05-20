const imoveis = require("../dados/imoveis");

function consultarImoveis(req, res) {
    res.json(imoveis);
}

function consultarUmImovel(req, res) {
    const imovel = imoveis.find(imovel => imovel.id === Number(req.params.id));
    
    if(imovel) {
        res.json(imovel)
    }
}


module.exports = {
    consultarImoveis,
    consultarUmImovel
}