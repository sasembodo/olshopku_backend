const model = require('../models/products')
const helpers = require('../helpers/index')

module.exports = {
    getProducts: (_, res) => {
        model
            .getProducts()
            .then(response => {
                helpers.success(res, response)
            })
            .catch(err => {
                console.log(err);
            });
    },
    addProducts: (req, res) => {
        const { 
            name,
            price,
            quantity,
            description            
        } = req.body
        const data = {            
            name,
            price,
            quantity,
            description
        }

        model.addProducts(data)
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                console.log(err)
            })

    },
    editProducts: (req, res) => {
        const id = req.params.id
        const { 
            name,
            price,
            quantity,
            description
        } = req.body
        const data = {
            id,
            name,
            price,
            quantity,
            description
        }

        model.editProducts(data, id)
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                console.log(err)
            })
    },
    deleteProducts: (req, res) => {
        const id = req.params.id

        model.deleteProducts(id)
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                console.log(err)
            })
    }
}