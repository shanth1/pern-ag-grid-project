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
        birthday: { type: DataTypes.DATE },
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
    },
    {
        freezeTableName: true,
    },
);

module.exports = Employee;
