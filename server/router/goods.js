const express = require('express')
const router = express.Router()
const goods = require('../controller/goods')
const jwt = require('jsonwebtoken')

const midjwt = (req, res, next) => {
  if(req.headers.hasOwnProperty('token')){
    var decoded = jwt.verify(req.headers.token, "apaaa")
    console.log('==============================',decoded);
    req.headers.auth = decoded
    console.log("===============>", req.headers.auth);
    next()
  }
  else {
    res.send("maaf anda harus login")
  }
}

router.get('/:id', goods.goodId)
router.get('/semua/all', goods.all)
router.get('/', midjwt, goods.allById)
router.delete('/:id', midjwt, goods.lost)
// router.put('/:id', midjwt, goods.update)
router.post('/', midjwt, goods.insert)

module.exports = router
