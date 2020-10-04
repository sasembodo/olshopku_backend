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
            user_id,
            address,
            phone_number,            
        } = req.body
        const data1 = {            
            name,
            email,
            password,
        }
        const data2 = {
            user_id,
            address,
            phone_number,
        }

        model.addUsers(data1)
            .then(result => {
                model.addUsers(data2)
                    .then(result => {
                        res.json(result)
                    })
                    .catch(err => {
                        console.log(err)
                    }),
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
            user_id,
            address,
            phone_number,            
        } = req.body
        const data1 = {            
            name,
            email,
            password,
        }
        const data2 = {
            user_id,
            address,
            phone_number,
        }

        model.editUsers(data1,id)
            .then(result => {
                model.editUsers(data2,user_id)
                    .then(result => {
                        res.json(result)
                    })
                    .catch(err => {
                        console.log(err)
                    }),
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
                model.deleteUsers(user_id)
                    .then(result => {
                        res.json(result)
                    })
                    .catch(err => {
                        console.log(err)
                    }),
                res.json(result)
            })
            .catch(err => {
                console.log(err)
            })
    }
}