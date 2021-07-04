const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define("student", {

  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
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
    defaultValue: 'https://lh3.googleusercontent.com/proxy/-z6dPsQgYnQVCTlBUfKhW460FRBw0CpiVIpf4RkEN8I0nWbhjfQiQqHUs0x9FSXadSGR9EPHtJeUkQ9oACWBJ6LkpKZa1_AkFTED_mfZhIQR'
  },

  gpa {
    type: Sequelize.DECIMAL (1,1),
    defaultValue: 0.0

  }

});

module.exports = Student;