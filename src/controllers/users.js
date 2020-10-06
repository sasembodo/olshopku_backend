const model1 = require('../models/users')
const model2 = require('../models/users_detail')
const helpers = require('../helpers/index')

module.exports = {
    getUsers: (_, res) => {
        model1
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
            address,
            phone_number,            
        } = req.body
        const data1 = {            
            name,
            email,
            password,
        }
        const data2 = {
            address,
            phone_number,
        }

        model1.addUsers(data1)
            .then(result1 => {
                data2.user_id = result1.insertId;
                model2.addUsers(data2)
                    .then(result2 => {
                        res.json(result2)
                    })
                    .catch(err => {
                        console.log(err)
                    })                
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

        model1.editUsers(data1,id)
            .then(result => {
                model2.editUsers(data2,user_id)
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

        model1.deleteUsers(id)
            .then(result => {
                model2.deleteUsers(user_id)
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