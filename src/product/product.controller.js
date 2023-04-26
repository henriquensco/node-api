//require('dotenv').config();
const express = require('express');

const ProductService = require('./product.service')

const router = express.Router();

router.get('/', (req, res) => {
    res.send(ProductService.getAllProducts());
});

router.get('/search-product', (req, res) => {
    const { search } = req.query;
    res.send(ProductService.searchProduct(search));
});

module.exports = router;