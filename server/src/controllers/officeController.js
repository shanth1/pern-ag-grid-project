const sequelize = require("../config/db");
const { QueryTypes } = require("sequelize");
const { getFilterString } = require("../utils/filter");

class OfficeController {
    async getAll(req, res) {
        const { startRow, endRow, sortModel, filterModel } = req.query;

        const fields = `id, country, city, square, "squareRentPrice", "openingDate", "createdAt", "updatedAt"`;
        const table = "public.office";

        const sorting = sortModel
            ? `ORDER BY "${sortModel[0].colId}" ${sortModel[0].sort}`
            : "";

        const filtration = getFilterString(filterModel);

        try {
            const offices = await sequelize.query(
                `SELECT ${fields} FROM ${table} ${filtration} ${sorting} LIMIT ${
                    endRow - startRow
                } OFFSET ${startRow};`,
                {
                    type: QueryTypes.SELECT,
                },
            );
            const lengthResponse = await sequelize.query(
                `SELECT COUNT(*) FROM ${table} ${filtration};`,
                {
                    type: QueryTypes.SELECT,
                },
            );
            res.json({ offices, length: Number(lengthResponse[0].count) });
        } catch (error) {
            console.log(error);
            res.status(500).send(error.message);
        }
    }
}

module.exports = new OfficeController();
