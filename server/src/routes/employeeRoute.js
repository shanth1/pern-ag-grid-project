const Router = require("express");
const employeeRouter = new Router();
const employeeController = require("../controllers/employeeController");

employeeRouter.get("/", employeeController.getAll);
employeeRouter.get("/:id", employeeController.getOne);
employeeRouter.post("/", employeeController.create);
employeeRouter.put("/:id", employeeController.update);
employeeRouter.delete("/:id", employeeController.delete);

module.exports = employeeRouter;
