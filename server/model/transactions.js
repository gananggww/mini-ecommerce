const mongoose = require('mongoose')

const schemaGoods = new mongoose.Schema({
  buyer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  address: String,
  telp: String,
  goods: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Good'
  }]
});
const Transaction = mongoose.model('Transaction', schemaGoods);

module.exports = Transaction
