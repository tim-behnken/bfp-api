'use strict';

module.exports = (sequelize, DataTypes) => {
  const Asset = sequelize.define('asset', {
    assetId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
      autoIncrement: true,
      field: 'asset_id'
    },
    make: {
      type: DataTypes.STRING,
      allowNull: false
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    note: {
      type: DataTypes.STRING
    }
  });
  
  return Asset;
};