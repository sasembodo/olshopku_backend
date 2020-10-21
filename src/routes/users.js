const express = require ('express')
const controller = require ('../controllers/users')
const Router = express.Router()

const auth = require('../helpers/auth')

Router
    .get('/', auth.checkToken, controller.getUsers)
    .post('/', controller.addUsers)
    .patch('/:id', auth.checkToken, controller.editUsers)
    .delete('/:id', auth.checkToken, controller.deleteUsers)
    .post('/login', controller.loginUser)

module.exports = Router