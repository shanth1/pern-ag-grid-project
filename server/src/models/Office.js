const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const Office = sequelize.define("office", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    country: { type: DataTypes.STRING },
    city: { type: DataTypes.STRING },
    square: { type: DataTypes.DECIMAL(20, 2) },
    rentPrice: { type: DataTypes.DECIMAL(20, 2) },
    openingDate: { type: DataTypes.DATE },
});

module.exports = Office;
