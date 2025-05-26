const { Router } = require("express");
const cubeController = require("../controllers/cubeController");
const cubeRouter = Router();

cubeRouter.get("/",cubeController.cubeGetIndex);
cubeRouter.get("/addCube",cubeController.cubeGetAddCube);
cubeRouter.post("/addNewCube", cubeController.cubePostAddCube);

module.exports = cubeRouter;