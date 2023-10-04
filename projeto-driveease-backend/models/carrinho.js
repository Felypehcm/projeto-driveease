const mongoose = require('mongoose');

const CarrinhoSchema = {
    nome: String,
    quantidade: Number,
    valor: Number,
};

module.exports = mongoose.model('carrinho', CarrinhoSchema);