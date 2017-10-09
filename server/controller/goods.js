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
const goodId = (req, res) => {
  db.find({
    _id:req.params.id
  }).populate('seller')
  .then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
}

const all = (req, res) => {
  db.find().populate('seller')
  .then(response => {
    console.log(response);
    res.send(response)
  })
  .catch(err => {
    console.log(err);
    res.send(err)
  })
}


const insert = (req, res) => {
  db.create({
    nama: req.body.nama,
    deskripsi: req.body.deskripsi,
    deskripsi_short: req.body.deskripsi_short,
    harga: req.body.harga,
    img: req.body.img,
    jumlah: req.body.jumlah,
    // status: false,
    seller: req.headers.auth.id
  })
  .then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
}

const lost = (req, res) => {
  db.remove({
    _di: req.params.id
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
  lost,
  all,
  goodId
}
