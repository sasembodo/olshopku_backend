const db = require('../configs/db')

module.exports = {    
    addUsers: (data2) => {
        console.log(data2)
        return new Promise ((resolve, reject) =>{
            db.query('INSERT INTO users_detail SET ?', data2, (err, response) =>{
                if (!err) {
                  console.log(response, "ini respon add users_detail")
                    resolve (response)
                }else{
                    reject (err)
                }
            })
        })
    },
    editUsers: (data2, id) => {
        return new Promise((resolve, reject) => {
          db.query('UPDATE users_detail SET ? WHERE user_id = ?', [data2, id], (err, result) => {
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
          db.query('DELETE FROM users_detail WHERE id = ?', id, (err, result) => {
            if (!err) {
              resolve(result)
            } else {
              reject(new Error(err))
            }
          })
        })
      },
}