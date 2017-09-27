const db = require('../model/users')
const jwt = require('jsonwebtoken')
const FB = require('fb')

const login = (req, res) => {
  FB.api('/me', {fields: ['id','name','email','picture']}, (response) => {
    // res.send(response)
    console.log(response);
    db.find({fb_id: response.id})
    .then(result => {
      if(result.length === 0){
        db.create({
          fb_id: response.id,
          email: response.email,
          img: response.picture.data.url,
          name: response.name
        })
        .then(rows =>{
          var siapBungkus = {
            id: rows._id,
            fb_id: rows.id,
            email: rows.email,
            name: rows.name
          }
          var token = jwt.sign(siapBungkus, 'apaaa')
          console.log('tokennya', token);
          res.send({token: token, name: rows.name})
        })
        .catch(err =>{
          res.send(err)
        })
      } else {
        var siapBungkus = {
          id: result._id,
          fb_id: result.id,
          email: result.email,
          name: result.name
        }
        var token = jwt.sign(siapBungkus, 'apaaa')
        console.log('tokennya', token);
        res.send({token: token, name: result.name})
      }
    })
  })
}



module.exports = {
  login,
}
