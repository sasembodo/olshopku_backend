const db = require('../configs/db')

module.exports = {
    getUsers: () => {
        return new Promise ((resolve, reject) =>{
            db.query(`SELECT * FROM users`, (err, response) =>{
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
    editUsers: (data, user_id) => {
        return new Promise((resolve, reject) => {
          db.query('UPDATE users SET ? WHERE user_id = ?', [data, user_id], (err, result) => {
            if (!err) {
              resolve(result)
            } else {
              reject(new Error(err))
            }
          })
        })
      },
    deleteUsers: (user_id) => {
        return new Promise((resolve, reject) => {
          db.query('DELETE FROM users WHERE user_id = ?', user_id, (err, result) => {
            if (!err) {
              resolve(result)
            } else {
              reject(new Error(err))
            }
          })
        })
      },
}