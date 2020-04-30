const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { sequelize } = require("./models");

const app = express();
app.use(bodyParser.json());
app.use(morgan("combined"));

app.get("/api", (req, res) => {
  res.send({
    msg: "hello node",
  });
});

app.post("/users", (req, res) => {
  console.log(req.body);
});
app.listen(3000, () => console.log("Server has been started on port 3000"));
sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
//force :强制创建表
