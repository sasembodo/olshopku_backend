module.exports = {    
    addUsers: (data2) => {
        console.log(data2)
        return new Promise ((resolve, reject) =>{
            db.query('INSERT INTO users SET ?', data2, (err, response) =>{
                if (!err) {
                    resolve (response)
                }else{
                    reject (err)
                }
            })
        })
    },
    editUsers: (data2, id) => {
        return new Promise((resolve, reject) => {
          db.query('UPDATE users SET ? WHERE id = ?', [data2, id], (err, result) => {
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