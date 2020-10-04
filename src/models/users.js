const db = require('../configs/db')

module.exports = {
    getUsers: () => {
        return new Promise ((resolve, reject) =>{
            db.query(`SELECT users.*, users_detail.* FROM users
            LEFT JOIN users_detail
            ON users.id = users_detail.user_id`, (err, response) =>{
                if (!err) {
                    resolve (response)
                }else{
                    reject (err)
                }
            })
        })
    },
    addUsers: (data) => {
        console.log(data)
        return new Promise ((resolve, reject) =>{
            db.query('INSERT INTO users SET ?', data, (err, response) =>{
                if (!err) {
                    resolve (response)
                }else{
                    reject (err)
                }
            })
        })
    },
    editUsers: (data, id) => {
        return new Promise((resolve, reject) => {
          db.query('UPDATE users SET ? WHERE id = ?', [data, id], (err, result) => {
            if (!err) {
              resolve(result)
            } else {
              reject(new Error(err))
            }
          })
        })
      },
    deleteUsers: (id) => {
        return new Promise((resolve, reject) => {
          db.query('DELETE FROM users WHERE id = ?', id, (err, result) => {
            if (!err) {
              resolve(result)
            } else {
              reject(new Error(err))
            }
          })
        })
      },
}