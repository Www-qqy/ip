const Sequelize = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Model extends Sequelize.Model {}
  Model.init(
    {
      attack: { type: DataTypes.INTEGER },
      attacker_id: {
        type: DataTypes.STRING,
      },
      suffer_id: {
        type: DataTypes.STRING,
      },
      time: {
        type: DataTypes.DATE,
      },
      means: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Attack',
    }
  )
  return Model
}
