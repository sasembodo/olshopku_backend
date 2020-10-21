const model1 = require('../models/users')
const model2 = require('../models/users_detail')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
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
        
        // model1.addUsers(data1)
        //     .then(result1 => {
        //         data2.user_id = result1.insertId;
        //         model2.addUsers(data2)
        //             .then(result2 => {
        //                 res.json(result2)
        //             })
        //             .catch(err => {
        //                 console.log(err)
        //             })                
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
       
        model.emailCheck(email)
            .then(resultQuery => {
                if (resultQuery.length === 0) {
                    if (validateEmail(email) == true) {
                        if (validatePassword(password) == true) {
                        bcryptjs.genSalt(saltRounds, (err, salt) => {
                            bcryptjs.hash(password, salt, (err, hash) => {
                            const data1 = { id, email, password: hash, name }

                            model.addUser(data1)
                                .then(resultQuery => {
                                res.json({
                                    status: 200,
                                    message: 'Success registering new user',
                                    data1
                                    })
                                })
                                .catch(err => {
                                console.log(err)
                                res.status(400).json({
                                    status: 400,
                                    message: 'Register was failed'
                                    })
                                })
                            })
                        })
                        } else {
                        res.json({
                            message: 'Password not valid, lowercase and number are required',
                            })
                        }
                    } else {
                        res.json({
                        message: 'Email not valid',
                        })
                    }
                } else {
                res.status(400).json({
                    status: 400,
                    message: 'Email already exist'
                    })
                }
            })
            .catch(err => {
                res.status(400).json({
                status: 400,
                message: 'Error get Email from Database'
                })
            })

    },
    editUsers: (req, res) => {
        const id = req.params.id
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
        
        // model1.editUsers(data1,id)
        //     .then(result1 => {                               
        //         model2.editUsers(data2,id)
        //             .then(result2 => {                        
        //                 res.json(result2)
        //             })
        //             .catch(err => {
        //                 console.log(err)
        //             })                
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
        
        if (validateEmail(email) == true) {
            if (validatePassword(password) == true) {
                bcryptjs.genSalt(saltRounds, (err, salt) => {
                    bcryptjs.hash(password, salt, (err, hash) => {
                    const data1 = { email, name, password: hash}
        
                    model.editUser(data1, id)
                        .then(resultQuery => {
                        res.json({
                            status: 200,
                            message: 'Success registering new user',
                            data1
                        })
                        })
                        .catch(err => {
                        console.log(err)
                        res.status(400).json({
                            status: 400,
                            message: 'Register was failed'
                            })
                        })
                    })
                })
            }else{
              res.json({
                message: 'Password not valid, lowercase and number are required',
                })
            }
        }else{
        res.json({
            message: 'Email not valid',
            })
        }        
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
    },
    loginUser: (req, res) => {
        const email = req.body.email
    
        model.loginUser(email)
          .then(resultQuery => {
            const id = resultQuery[0].id
            const name = resultQuery[0].name
            const passwordHash = resultQuery[0].password
            const password = req.body.password
    
            if (bcryptjs.compareSync(password, passwordHash)) {
              const token = jwt.sign({ id: id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '100d' })
              res.json({
                status: 200,
                message: 'Login Success',
                data1: {
                  email,
                  token,
                  id,
                  name                  
                }
              })
            } else {
              res.json({
                status: 400,
                message: 'Password is incorrect'
              })
            }
          })
    
          .catch(err => {
            console.log(err)
            res.status(400).json({
              status: 400,
              message: 'Email or Password is incorrect!'
            })
          })
      }
}