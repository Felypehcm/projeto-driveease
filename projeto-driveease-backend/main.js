require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// criando o servidor web
const app = express();

// configurando o servidor web
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// conectando os controllers ao servidor web
app.use('/produtos', require('./controllers/produto_controller'));
app.use('/carrinho', require('./controllers/carrinho_controller'));

console.log('Conectando ao banco de dados...');
mongoose.connect(process.env.URL_BANCO_DE_DADOS).then(() => {
    console.log('Conectado ao banco de dados com sucesso!!');
    app.listen(parseInt(process.env.PORTA_SERVIDOR), () => {
        console.log(`O servidor está no ar em: http://localhost:${process.env.PORTA_SERVIDOR}`);
    });
});