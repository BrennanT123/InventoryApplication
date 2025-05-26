const db = require("../db/queries");

exports.cubeGetIndex = async function (req, res) {
  const cubes = await db.getAllCubes();
  let brands = [];
  let sizes = [];
  for (let i = 0; i < cubes.length; i++) {
    if (!brands.includes(cubes[i].cube_brand)) {
      brands = [...brands, cubes[i].cube_brand];
    }
    if (!sizes.includes(cubes[i].cube_size)) {
      sizes = [...sizes, cubes[i].cube_size];
    }
  }
  console.log("cubes", cubes);
  console.log("brands",brands);
  console.log("sizes",sizes);
  res.render("home",
    {
        brands: brands,
        cubes: cubes,
    }
  );
};

exports.cubeGetAddCube = (req, res) =>
{
    res.render("addCube");
};
exports.cubePostAddCube = (req ,res) =>
{
    const newCube = req.body;
    db.addNewCube(newCube);
    res.redirect("/");
};