const db = require('../model/goods')
const FB = require('fb')

const allById = (req, res) => {
  db.find({
    seller:req.headers.auth.id
  }).populate('seller')
  .then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
}

const insert = (req, res) => {
  db.create({
    nama: req.body.nama,
    deskripsi: req.body.deskripsi,
    img: req.body.img
    jumlah: req.body.jumlah,
    status: false,
    seller: req.headers.auth.id
  })
  .then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
})

const lost = (req, res) => {
  db.remove({
    _di: req.params.id
    seller: req.headers.auth.id
  })
  .then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
}

// const update = (req, res) => {
//   db.update({
//
//   })
// }


module.exports = {
  insert,
  allById,
  lost
}
