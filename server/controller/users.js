const db = require('../model/users')
const jwt = require('jsonwebtoken')
const FB = require('fb')

const login = (req, res) => {
  FB.api('me', { field: ['id', 'name', 'picture', 'email']}, (response) => {
    console.log('ini response dari callback field : ', response);
    db.find({fb_id: response.id})
    .then(response => {
      console.log('ini response finding user apakah udah login : ', response);
      if(response.length === 0) {
        db.create({
          fb_id: response.id,
          email: response.email,
          name: response.name,
          img: response.picture.data.url
        })
        .then(rows => {
          console.log('ini response ketika berhasil create : ', rows);
          let nasiLele = {
            fb_id: rows.fb_id,
            email: rows.email,
            name: rows.name,
            img: rows.img
          }
          let token = jwt.sign(nasiLele, 'satejeroan')
          res.send({token: token, name: rows.name})
        })
        .catch(err => {
          console.log('ini error ketika gagal input data : ', err);
          res.send(err)
        })
      }
    })
    .catch(err => {
      console.log('ini error finding users');
    })
  })
}

module.exports = {
  login
}
