const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost/wikistack");

db.authenticate().then(() => {
  console.log("connected to the database");
});

const User = db.define('page', {
    title: Sequelize.STRING,
    slug: Sequelize.,
    content: Sequelize.STRING,
    status: Sequelize.BOOLEAN
})

module.exports = db;
