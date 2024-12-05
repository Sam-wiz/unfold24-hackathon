const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Meme = sequelize.define('Meme', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  token_address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  token_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  category: {
    type: DataTypes.ENUM('regular_memes', 'dark_memes', 'celebrity_memes', 'political_memes', 'sexist_memes'),
    allowNull: false
  }
});

module.exports = Meme;