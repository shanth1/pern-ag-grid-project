class EmployeeController {
    async getAll(req, res) {
        res.send("get all employee");
    }
    async create(req, res) {}
    async update(req, res) {}
    async delete(req, res) {}
}

module.exports = new EmployeeController();
