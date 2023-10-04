const express = require ('express');
const router = express.Router();
const Carrinho = require('../models/carrinho');

router.get('/', async (req, res) => {
    res.json(await Carrinho.find());
});

router.get('/:id', async (req, res) => {
    res.json(await Carrinho.findById(req.params.id));
});

router.post('/', async (req, res) => {
    res.json(await new Carrinho(req.body).save());
});

router.put('/:id', async (req, res) => {
    res.json(await Carrinho.findByIdAndUpdate(req.params.id, req.body));
});

router.delete('/:id', async (req, res) => {
    res.json(await Carrinho.findByIdAndRemove(req.params.id));
});

module.exports = router;