const Sequelize = require('sequelize');
const db = require('../db');

const Campus = db.define("campus", {

  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  imageUrl: {
    type: Sequelize.STRING,
    isUrl: true,
    defaultValue: 'https://cdn.pixabay.com/photo/2017/11/09/13/00/buildings-2933455_1280.png'
  },

  address: {
    type: Sequelize.TEXT,
    allowNull:false
  },

  description: {
    type: Sequelize.TEXT,
  }

});
 
module.exports = Campus;