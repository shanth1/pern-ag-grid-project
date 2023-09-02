const Office = require("../models/Office");

class OfficeController {
    async getAll(req, res) {
        const data = await Office.findAll();
        res.json(data);
    }
}

module.exports = new OfficeController();
