const express = require ('express');
const products = require ('./products');
const users = require ('./users');

const Router = express.Router ();

Router.use ('/products', products);
Router.use ('/users', users); 

module.exports = Router;