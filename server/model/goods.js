const mongoose = require('mongoose')

const schemaGoods = new mongoose.Schema({
  nama: String,
  deskripsi: String,
  img: String,
  jumlah: Number,
  status: false,
  seller: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});
const Good = mongoose.model('Good', schema);

module.exports = Good
