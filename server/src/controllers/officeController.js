const sequelize = require("../config/db");
const { QueryTypes } = require("sequelize");

class OfficeController {
    async getAll(req, res) {
        const { startRow, endRow } = req.body;
        console.log(startRow, "-", endRow);
        const data = await sequelize.query(
            `SELECT id, country, city, square, "squareRentPrice", "openingDate", "createdAt", "updatedAt" FROM public.office LIMIT ${
                endRow - startRow
            } OFFSET ${startRow};`,
            {
                type: QueryTypes.SELECT,
            },
        );
        res.json(data);
    }
}

module.exports = new OfficeController();
