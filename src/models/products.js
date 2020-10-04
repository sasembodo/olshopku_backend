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
    editProducts: (data, id) => {
        return new Promise((resolve, reject) => {
          db.query('UPDATE products SET ? WHERE id = ?', [data, id], (err, result) => {
            if (!err) {
              resolve(result)
            } else {
              reject(new Error(err))
            }
          })
        })
      },
    deleteProducts: (id) => {
        return new Promise((resolve, reject) => {
          db.query('DELETE FROM products WHERE id = ?', id, (err, result) => {
            if (!err) {
              resolve(result)
            } else {
              reject(new Error(err))
            }
          })
        })
      },
}