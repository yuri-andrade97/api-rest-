const express = require("express");
const roteador = require("./roteador");
const app = express();

const { travaDeSenha } = require("./intermediarios")
const { verificarTodosAlunos } = require("./controladores/alunos");

app.use(express.json());
app.use(travaDeSenha);


app.use(roteador);

app.listen(8000);
