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
    defaultValue: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPy8lTb_58XcVBRZfjx8nTmwBHWOy_8HdRUw&usqp=CAU'
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