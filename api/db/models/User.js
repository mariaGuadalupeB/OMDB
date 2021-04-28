
const Sequelize = require("sequelize");
const db = require("../index");

const crypto = require("crypto");
const secret = 'Plataforma5omdb'; 

class User extends Sequelize.Model {}

User.init(
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
          isEmail: true
      }

    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
          min: 8,
          max: 16,
      }
    },
    salt: {
      type: Sequelize.STRING,
    },
  },
  { sequelize: db, modelName: "user" }
);

User.addHook("beforeCreate", (user) => {
    user.salt = crypto.randomBytes(20).toString("hex");
    user.password = user.hashPassword(user.password); 
});
    
User.prototype.hashPassword = function (password) {
    return crypto.createHmac('sha256', secret) 
    .update(password)
    .digest('hex'); 
}

User.prototype.validPassword = function (loginPassword) {
    return this.password === this.hashPassword(loginPassword)
}

module.exports = User;