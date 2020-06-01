const Sequelize = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Model extends Sequelize.Model {}
  Model.init(
    {
      email: {
        type: DataTypes.STRING,
        unique: true,
        isEmail: true,
      },
      isApply: {
        type: DataTypes.STRING,
      },
      reason: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'RoleApply',
    }
  )
  return Model
}
