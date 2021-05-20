const express = require("express");
const imoveis = require("./controladores/imoveis");

const roteador = express();

roteador.get("/imoveis", imoveis.consultarImoveis);
roteador.get("/imoveis/:id", imoveis.consultarUmImovel);

module.exports = roteador;