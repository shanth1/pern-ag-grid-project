const Router = require("express");
const officeRouter = new Router();
const officeController = require("../controllers/officeController");

officeRouter.get("/", officeController.getAll);

module.exports = officeRouter;
