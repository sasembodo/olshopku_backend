const express = require ('express')
const controller = require ('../controllers/products')
const Router = express.Router()

const auth = require('../helpers/auth')

Router
    .get('/', controller.getProducts)
    .post('/', controller.addProducts)
    .patch('/:id_product', controller.editProducts)
    .delete('/:id_product', controller.deleteProducts)

module.exports = Router