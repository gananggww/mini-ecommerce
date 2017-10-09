const db = require('../model/transactions')

const insert = (req, res) => {
  db.create({
    buyer: req.headers.auth.id,
    goods: req.headers.goods,
    address: req.body.address,
    telp: req.body.telp
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
