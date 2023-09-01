const sequelize = require("../config/db");
const Office = require("../models/Office");
const { QueryTypes } = require("sequelize");

class OfficeController {
    async getAll(req, res) {
        console.log("get");
        const data = await Office.findAll();
        // const data2 = await sequelize.query(
        //     `SELECT * FROM public."office" ORDER BY id ASC`,
        //     { type: QueryTypes.SELECT },
        // );
        res.json(data);
    }
}

module.exports = new OfficeController();
