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
        const id_product = req.params.id_product
        const { 
            name,
            price,
            quantity,
            description
        } = req.body
        const data = {
            id_product,
            name,
            price,
            quantity,
            description
        }

        model.editProducts(data, id_product)
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                console.log(err)
            })
    },
    deleteProducts: (req, res) => {
        const id_product = req.params.id_product

        model.deleteProducts(id_product)
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                console.log(err)
            })
    }
}