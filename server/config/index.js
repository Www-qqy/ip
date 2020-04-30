const path = require("path");
module.exports = {
  db: {
    database: process.env.DATABASE || "ip",
    username: "ip",
    password: "ip",
    options: {
      host: "localhost",
      dialect: "sqlite",
      storage: path.resolve(__dirname, "../db/ip.sqlite"),
      define: {
        underscored: true,
        paranoid: true, //逻辑删除
      },
    },
  },
};
