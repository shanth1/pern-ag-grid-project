const { Employee } = require("../models");

class EmployeeController {
    async getAll(req, res) {
        const data = await Employee.findAll();
        res.json(data);
    }

    async getOne(req, res) {
        const { id } = req.params;
        const data = await Employee.findOne({ where: { id } });
        res.json(data);
    }

    async getAllFromOffice(req, res) {
        const { officeId } = req.params;
        const data = await Employee.findAll({ where: { officeId } });
        res.json(data);
    }

    async create(req, res) {
        const {
            firstName,
            lastName,
            gender,
            birthday,
            position,
            salary,
            passport,
            officeId,
        } = req.body;
        const newEmployee = await Employee.create({
            firstName,
            lastName,
            gender,
            birthday,
            position,
            salary,
            passport,
            officeId,
        });
        res.json(newEmployee);
    }

    async update(req, res) {
        const { id } = req.params;
        const {
            firstName,
            lastName,
            gender,
            birthday,
            position,
            salary,
            passport,
            officeId,
        } = req.body;
        const updatedStatus = await Employee.update(
            {
                firstName,
                lastName,
                gender,
                birthday,
                position,
                salary,
                passport,
                officeId,
            },
            {
                where: {
                    id,
                },
            },
        );
        res.json(updatedStatus);
    }

    async delete(req, res) {
        const { id } = req.params;
        const deletedStatus = await Employee.destroy({
            where: {
                id,
            },
        });
        res.json({ deletedStatus });
    }
}

module.exports = new EmployeeController();
