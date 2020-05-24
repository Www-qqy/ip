const path = require('path') // 路径？待研究
const config = require('../config') // 引入配置文件
const Sequelize = require('sequelize') // 引入sequelize
const fs = require('fs')
const db = {} // 数据库
const sequelize = new Sequelize(
  config.db.database,
  config.db.password,
  config.db.username,
  config.db.options
) // 实例化sequelize
//const User = sequelize.import("./User.js");(1)
//将每一个models下的文件放到db/ip.sqlite中，变成一个独立的表
fs.readdirSync(__dirname)
  .filter((file) => file !== 'index.js')
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  }) //除models/index.js这个入口文件之外，其他文件读取当前目录，循环遍历model，进行导入操作
db.Sequelize = Sequelize
db.sequelize = sequelize
//db.User = User;(2)注释的(1)(2)这两句，可以用中间这一段代替，批量使用
//console.log(db);
module.exports = db
