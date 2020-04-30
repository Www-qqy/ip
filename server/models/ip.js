const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Model extends Sequelize.Model {}
  Model.init(
    {
      name: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      position: {
        type: DataTypes.STRING,
        validate: {
          len: [8, 40],
        },
      },
    },
    {
      sequelize,
      modelName: "Ip",
    }
  );
  return Model;
};
