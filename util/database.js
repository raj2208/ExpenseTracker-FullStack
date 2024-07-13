const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "expense_tracker_website",
  "root",
  "Raj@12345",
  {
    dialect: "mysql",
    host: "localhost",
  }
);

module.exports = sequelize;
