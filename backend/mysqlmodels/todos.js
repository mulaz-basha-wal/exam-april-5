const { DataTypes } = require("sequelize");
const db = require("../dbsql");

const Product = db.define(
  "todos",
  {
    status: {
      type: DataTypes.BOOLEAN,
    },
    todo: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true }
);
module.exports = Product;
