require('dotenv').config();

const express = require('express');

const app = express();
const port = process.env.HOST_POST;

app.get('/', (req, res) => {
    res.json({
        message: 'Success!'
    })
});

app.listen(port, () => {
    console.log(`Listening the port: ${port}`);
});