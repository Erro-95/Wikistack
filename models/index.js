const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost/wikistack", {
  logging: false,
});

db.authenticate().then(() => {
  console.log("connected to the database");
});

const Page = db.define("page", {
  title: { type: Sequelize.STRING, allowNull: false, notEmpty: true },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
    isUrl: true,
    notEmpty: true,
  },
  content: { type: Sequelize.TEXT, allowNull: false },
  status: { type: Sequelize.ENUM("open", "closed"), allowNull: false },
});

const User = db.define("user", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    notEmpty: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    notEmpty: true,
  },
});

module.exports = { db, Page, User };
