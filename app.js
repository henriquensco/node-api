require('dotenv').config();

const express = require('express');

const app = express();
const router = express.Router();
const port = process.env.HOST_POST;

const Product = require('./src/product/product.controller')

/* router.get('/product', (req, res) => {
    res.send(Product())
}); */

app.use('/product', Product);

app.listen(port, () => {
    console.log(`Listening the port: ${port}`);
});