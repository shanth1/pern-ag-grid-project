const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const Employee = sequelize.define(
    "employee",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        firstName: { type: DataTypes.STRING },
        lastName: { type: DataTypes.STRING },
        gender: { type: DataTypes.ENUM("male", "female") },
        birthday: { type: DataTypes.DATEONLY },
        position: {
            type: DataTypes.ENUM(
                "director",
                "projectManager",
                "analytic",
                "designer",
                "teamLeader",
                "seniorDeveloper",
                "middleDeveloper",
                "juniorDeveloper",
            ),
        },
        salary: { type: DataTypes.DECIMAL(20) },
        passport: { type: DataTypes.DECIMAL(10) },
        createdAt: { type: DataTypes.DATEONLY },
    },
    {
        freezeTableName: true,
    },
);

module.exports = Employee;
