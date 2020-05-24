const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
// 以上为安装的express和express插件 bodyParser是用来解析请求的
// morgan是用来认证信息的
const { sequelize } = require('./models')

const app = express()
app.use(bodyParser.json())
app.use(morgan('combined'))

require('./router')(app)

//{force:true}强制创建表
// app.post('/users', (req, res) => {
//   console.log(req.body)
//   res.send({
//     code: 200,
//     data: req.body,
//   })
// })
// 检验是否连接成功
app.listen(3000, () => console.log('Server has been started on port 3000'))
sequelize
  .sync()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err)
  })
