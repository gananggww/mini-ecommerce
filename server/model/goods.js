const mongoose = require('mongoose')

const schemaGoods = new mongoose.Schema({
  nama: String,
  deskripsi: String,
  deskripsi_short: String,
  img: String,
  jumlah: Number,
  harga: String,
  status: false,
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});
const Good = mongoose.model('Good', schemaGoods);

module.exports = Good
