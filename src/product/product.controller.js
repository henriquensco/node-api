//require('dotenv').config();
const express = require('express');

const ProductService = require('./product.service')

const router = express.Router();

router.get('/', (req, res) => {
    res.send(ProductService.getAllProducts());
});

router.get('/find-one', (req, res) => {
    res.send(ProductService.findOneProduct());
});

module.exports = router;