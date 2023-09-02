const Company = require("./Office");
const Employee = require("./Employee");

Company.hasMany(Employee);
Employee.belongsTo(Company);

module.exports = { Company, Employee };
