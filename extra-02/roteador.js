const express = require("express");
const alunos = require("./controladores/alunos");

const roteador = express();

roteador.get("/alunos", alunos.verificarTodosAlunos);
roteador.get("/alunos/:id", alunos.verificarUmAluno);
roteador.post("/alunos", alunos.criarAluno);
roteador.delete("/alunos/:id", alunos.deletarAluno);

module.exports = roteador;