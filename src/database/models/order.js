'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User,{as: 'users'}),

      Order.belongsTo(models.Shipping, {as:'shippings'}),

      Order.hasOne(models.OrderDetails,{
        as:'orderDetails',
        foreignKey: 'orderId'
      }),

      Order.belongsTo(models.Product, {as:'products'})

    }
  };
  Order.init({
    number: DataTypes.INTEGER,
    date: DataTypes.DATE,
    total: DataTypes.DECIMAL,
    userId: DataTypes.INTEGER,
    stateId: DataTypes.INTEGER,
    shippingId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};