const express = require("express");
const roteador = require("./roteador");
const { consultarImoveis, consultarUmImovel } = require("./controladores/imoveis");

const app = express();

app.use(express.json());

// usando as rotas criadas
app.use(roteador);


app.listen(8000);