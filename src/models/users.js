const db = require('../configs/db')

module.exports = {
    getUsers: () => {
        return new Promise ((resolve, reject) =>{
            db.query(`SELECT users.id, users.name, users.email, users.password, 
            users_detail.address, users_detail.phone_number 
            FROM users LEFT JOIN users_detail
            ON users.id = users_detail.user_id
            ORDER BY users.id`, (err, response) =>{
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
                  console.log(response.insertId, "ini respon add users")
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
              console.log(result,"ini result")
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