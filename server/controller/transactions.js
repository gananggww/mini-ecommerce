const db = require('../model/transactions')

const insert = (req, res) => {
  db.insert({
    seller: req.body.seller,
    buyer: req.headers.auth.id,
    goods: req.headers.goods
  })
  .then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
}

const all = (req, res) => {
  db.find({
    _id: req.params.id
  })
  .populate('buyer')
  .populate('seller')
  .populate('goods')
  .then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
}

module.exports = {
  all,
  insert
}
