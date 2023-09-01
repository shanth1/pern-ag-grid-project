const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const Employee = sequelize.define("employee", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    surname: { type: DataTypes.STRING },
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
    salary: { type: DataTypes.DECIMAL(20, 2) },
    passport: { type: DataTypes.DECIMAL(10) },
});

module.exports = Employee;
