const Router = require("express");
const router = new Router();
const officeRouter = require("./officeRoute");
const employeeRouter = require("./employeeRoute");

router.use("/office", officeRouter);
router.use("/employee", employeeRouter);

module.exports = router;
