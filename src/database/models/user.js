'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Rol, {
        as: 'rols',
        through: 'user_has_rol'}),
 
        User.belongsTo(models.Adress,{as:'adresses'}),

        User.hasMany(models.Order,{
          as:'orders',
          foreignKey: 'orderId'
        }),

        User.belongsTo(models.State, { as: 'states' })
      }

    
  };
  User.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    adressId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};