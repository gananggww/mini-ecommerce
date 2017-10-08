const express = require('express')
const router = express.Router()
const transactions = require('../controller/transactions')
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

router.get('/:id', midjwt, transactions.all)
router.post('/', midjwt, transactions.insert)

module.exports = router
