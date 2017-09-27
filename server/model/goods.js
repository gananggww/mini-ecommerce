const mongoose = require('mongoose')

const schemaGoods = new mongoose.Schema({
  nama: String,
  deskripsi: String,
  img: String,
  jumlah: Number,
  status: false,
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});
const Good = mongoose.model('Good', schemaGoods);

module.exports = Good
