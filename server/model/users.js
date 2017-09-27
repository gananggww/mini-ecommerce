const mongoose = require('mongoose')

const schemaUsers = new mongoose.Schema({
  name: String,
  email: String,
  fb_id: String,
  img: String
});
const User = mongoose.model('User', schemaUsers);

module.exports = User
