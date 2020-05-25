const Sequelize = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Model extends Sequelize.Model {}
  Model.init(
    {
      ip: {
        type: DataTypes.STRING,
        unique: true,
        isIP: true,
      },
      country: {
        type: DataTypes.STRING,
      },
      province: {
        type: DataTypes.STRING,
      },

      longitude: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
        validate: { min: -180, max: 180 },
      },
      latitude: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
        validate: { min: -90, max: 90 },
      },
    },
    {
      validate: {
        bothCoordsOrNone() {
          if ((this.latitude === null) !== (this.longitude === null)) {
            throw new Error(
              'Require either both latitude and longitude or neither'
            )
          }
        },
      },
      sequelize,
      modelName: 'AttackPoint',
    }
  )
  return Model
}
