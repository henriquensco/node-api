require('dotenv').config();

const express = require('express');

const app = express();
const port = process.env.HOST_POST;

const Product = require('./src/product/product.controller')

app.use('/product', Product);

app.listen(port, () => {
    console.log(`Listening the port: ${port}`);
});