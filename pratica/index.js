const express = require('express');
const { logarRequisicao, validacaoDeSenha } = require('./intermediario');
const roteador = require('./roteador')

const app = express();

app.use(express.json());
app.use(logarRequisicao); 
app.use(validacaoDeSenha);


app.use(roteador)

app.listen(8000)
