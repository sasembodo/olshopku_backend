const express = require ('express');
const products = require ('./products');

const Router = express.Router ();

Router.use ('/products', products); 

module.exports = Router;