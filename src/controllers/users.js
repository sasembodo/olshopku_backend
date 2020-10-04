const model = require('../models/users')
const helpers = require('../helpers/index')

module.exports = {
    getUsers: (_, res) => {
        model
            .getUsers()
            .then(response => {
                helpers.success(res, response)
            })
            .catch(err => {
                console.log(err);
            });
    },
    addUsers: (req, res) => {
        const { 
            name,
            email,
            password,            
        } = req.body
        const data = {            
            name,
            email,
            password,
        }

        model.addUsers(data)
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                console.log(err)
            })

    },
    editUsers: (req, res) => {
        const id = req.params.id
        const { 
            name,
            email,
            password,
        } = req.body
        const data = {
            id,
            name,
            email,
            password,
        }

        model.editUsers(data, id)
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                console.log(err)
            })
    },
    deleteUsers: (req, res) => {
        const id = req.params.id

        model.deleteUsers(id)
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                console.log(err)
            })
    }
}