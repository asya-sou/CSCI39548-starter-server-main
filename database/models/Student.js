const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define("student", {

  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    isEmail: true,
    allowNull: false
  },

  imageUrl: {
    type: Sequelize.STRING,
    isUrl: true,
    defaultValue: 'https://us.123rf.com/450wm/lineartestpilot/lineartestpilot1802/lineartestpilot180205164/94730024-cute-fat-cartoon-human-.jpg?ver=6'
  },

  gpa: {
    type: Sequelize.DECIMAL (1,1),
    defaultValue: 0.0
  }

});

module.exports = Student;