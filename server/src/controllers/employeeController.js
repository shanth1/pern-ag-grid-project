const { Employee } = require("../models");
const Office = require("../models/Office");
const { validateEmployeeRequest } = require("../validators/employeeValidator");

class EmployeeController {
    async getAll(req, res) {
        try {
            const data = await Employee.findAll();
            return res.json(data);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    async getOne(req, res) {
        const { id } = req.params;
        try {
            const data = await Employee.findOne({ where: { id } });
            return res.json(data);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    async getAllFromOffice(req, res) {
        const { officeId } = req.params;
        try {
            const office = await Office.findOne({
                where: { id: employee.officeId },
            });
            if (!office)
                return res
                    .status(400)
                    .send(`No office with id ${employee.officeId}`);
        } catch (error) {
            return res.status(500).send(error.message);
        }
        try {
            const data = await Employee.findAll({ where: { officeId } });
            return res.json(data);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    async create(req, res) {
        const { employee, errors } = validateEmployeeRequest(req.body);
        if (errors.length !== 0) {
            return res.status(400).send(errors);
        }
        try {
            const office = await Office.findOne({
                where: { id: employee.officeId },
            });
            if (!office)
                return res
                    .status(400)
                    .send(`No office with id ${employee.officeId}`);
        } catch (error) {
            return res.status(500).send(error.message);
        }
        try {
            const newEmployee = await Employee.create(employee);
            return res.json(newEmployee);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const { employee, errors } = validateEmployeeRequest(req.body);
        if (errors.length !== 0) {
            return res.status(400).send(errors);
        }
        try {
            const updatedStatus = await Employee.update(employee, {
                where: {
                    id,
                },
            });
            return res.json(updatedStatus);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    async delete(req, res) {
        const { id } = req.params;
        try {
            const deletedStatus = await Employee.destroy({
                where: {
                    id,
                },
            });
            res.json({ deletedStatus });
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }
}

module.exports = new EmployeeController();
