const express = require('express');
const { consultarMembros, consultarUmMembro, criarMembro, editarMembro, excluirMembro } = require("./controladores/membros")

const roteador = express();

roteador.get("/membros", consultarMembros);
roteador.get("/membros/:idConsultado", consultarUmMembro);
roteador.post("/membros", criarMembro);
roteador.patch("/membros/:idConsultado", editarMembro);
roteador.delete("/membros/:idConsultado", excluirMembro);

module.exports = roteador;
