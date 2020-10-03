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
        const user_id = req.params.user_id
        const { 
            name,
            email,
            password,
        } = req.body
        const data = {
            user_id,
            name,
            email,
            password,
        }

        model.editUsers(data, id_product)
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                console.log(err)
            })
    },
    deleteUsers: (req, res) => {
        const user_id = req.params.user_id

        model.deleteProducts(user_id)
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                console.log(err)
            })
    }
}