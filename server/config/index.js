const path = require('path')
// 以下是数据库相关
module.exports = {
  db: {
    database: process.env.DATABASE || 'ip',
    username: 'ip',
    password: 'ip',
    options: {
      host: 'localhost',
      dialect: 'sqlite',
      storage: path.resolve(__dirname, '../db/ip.sqlite'), // 应该是写到db就可以
      define: {
        underscored: true,
        paranoid: true, //逻辑删除
      },
    },
  },
  token: {
    secretOrPrivateKey: 'ip',
    options: {
      expiresIn: '24h',
    },
  },
}
//
