const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    process.env.DB || dbConfig.DB,
    process.env.USER || dbConfig.USER,
    process.env.PASSWORD || dbConfig.PASSWORD,
    {
        dialect: dbConfig.dialect,
        host: process.env.DB_HOST || dbConfig.HOST,
        port: process.env.DB_PORT || dbConfig.PORT,
    },
);

module.exports = sequelize;
