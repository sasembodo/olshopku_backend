const express = require ('express')
const controller = require ('../controllers/users')
const Router = express.Router()

const auth = require('../helpers/auth')

Router
    .get('/', controller.getUsers)
    .post('/', controller.addUsers)
    .patch('/:id', controller.editUsers)
    .delete('/:id', controller.deleteUsers)

module.exports = Router