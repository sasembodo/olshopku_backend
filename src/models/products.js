const db = require('../configs/db')

module.exports = {
    getProducts: () => {
        return new Promise ((resolve, reject) =>{
            db.query(`SELECT * FROM products`, (err, response) =>{
                if (!err) {
                    resolve (response)
                }else{
                    reject (err)
                }
            })
        })
    },
    addProducts: (data) => {
        console.log(data)
        return new Promise ((resolve, reject) =>{
            db.query('INSERT INTO products SET ?', data, (err, response) =>{
                if (!err) {
                    resolve (response)
                }else{
                    reject (err)
                }
            })
        })
    },
    editProducts: (data, id_product) => {
        return new Promise((resolve, reject) => {
          db.query('UPDATE products SET ? WHERE id_product = ?', [data, id_product], (err, result) => {
            if (!err) {
              resolve(result)
            } else {
              reject(new Error(err))
            }
          })
        })
      },
    deleteProducts: (id_product) => {
        return new Promise((resolve, reject) => {
          db.query('DELETE FROM products WHERE id_product = ?', id_product, (err, result) => {
            if (!err) {
              resolve(result)
            } else {
              reject(new Error(err))
            }
          })
        })
      },
}