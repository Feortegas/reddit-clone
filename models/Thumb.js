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
      }
    },
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'post',
        key: 'id'
      }
    },
    comment_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'comment',
        key: 'id',
        allowNull: true
      }
    },
    thumbs_up: {
      type: DataTypes.BOOLEAN
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'thumb',
    uniqueKeys: {
      thumbs_unique: {
        fields: ['user_id', 'post_id', 'comment_id', 'thumbs_up']
      }
    },
  }
);

module.exports = Thumb;
