'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Product.hasOne(models.Order,{
        as:'orders',
        foreignKey: 'productId'
      }),

      Product.hasOne(models.OrderDetails,{
        as:'ordersDetails',
        foreignKey: 'productId'
      }),

      Product.belongsTo(models.Payment,{as:'payments'}),

      Product.belongsTo(models.Brand,{as:'brands'}),

      Product.belongsTo(models.Category,{as:'categories'}),

      Product.belongsTo(models.Size,{as:'sizes'}) , 

      Product.belongsTo(models.Gender,{as:'genders'}),

      Product.hasMany(models.Image,{
        as:'images',
        foreignKey: 'productId'
      })


    }
  };
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    stock: DataTypes.INTEGER,
    stock_min: DataTypes.INTEGER,
    stock_max: DataTypes.INTEGER,
    brandId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    sizeId: DataTypes.INTEGER,
    genderId: DataTypes.INTEGER,
    paymentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};