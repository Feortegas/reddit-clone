const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Thumb extends Model {}

Thumb.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      },
      unique: 'uniqueThumb'
    },
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'post',
        key: 'id'
      },
      unique: 'uniqueThumb'
    },
    comment_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'comment',
        key: 'id',
        allowNull: true
      },
      unique: 'uniqueThumb'
    },
    thumbs_up: {
      type: DataTypes.BOOLEAN,
      unique: 'uniqueThumb'
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'thumb',
  }
);

module.exports = Thumb;
