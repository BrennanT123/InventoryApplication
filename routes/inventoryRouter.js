const { Router } = require("express");
const cubeController = require("../controllers/cubeController");
const cubeRouter = Router();

cubeRouter.get("/",cubeController.cubeGetIndex);
cubeRouter.get("/addCube",cubeController.cubeGetAddCube);
cubeRouter.post("/addNewCube", cubeController.cubePostAddCube);
cubeRouter.get("/search",cubeController.cubeGetSearch);
cubeRouter.get("/updateCube/:cubeID",cubeController.cubeGetUpdateCube);
cubeRouter.post("/updateCube/:cubeID",cubeController.cubePostUpdateCube);

module.exports = cubeRouter;