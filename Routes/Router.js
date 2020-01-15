const express = require('express');
const router = express.Router();

const ProductController = require('../Controllers/ProductController');

module.exports = (app) => {
    app.get('/product', ProductController.Index);
    app.post('/product', ProductController.Create);
};