const Sequelize = require("sequelize");

const db = new Sequelize("westsidenode", "root", "Mulaz@1093", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
