const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dbs = 'mongodb://localhost/miniEcommerce'
mongoose.connect(dbs)
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const users = require('./router/users')
const goods = require('./router/goods')

app.use('/users', users)
app.use('/goods', goods)

app.listen(3000, () => {
  console.log('lagi dengerin 3000 nih');
})