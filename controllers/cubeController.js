const db = require("../db/queries");

exports.cubeGetIndex = async function (req, res) {
  const cubes = await db.getAllCubes();
  displayCubes(cubes,req,res);
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

exports.cubeGetSearch = async (req,res) => 
{
    console.log(req.query.search);
    const cubes = await db.searchCubes(req.query.search);
    displayCubes(cubes,req,res);


};

exports.cubeGetUpdateCube = async (req,res) =>
{
    const cubeForUpdate = await db.getCubeForUpdate(req.params.cubeID);
    console.log(cubeForUpdate);
    res.render("cubePage",
        {
            cubeName: cubeForUpdate[0].cube_name,
            cubeBrand: cubeForUpdate[0].cube_brand,
            cubeID: cubeForUpdate[0].id,
        }
    )
}

exports.cubePostUpdateCube = async (req,res) =>
{
    
    await db.sendCubeUpdate(req.body,req.params.cubeID);
    res.redirect("/");
}

function displayCubes(cubes,req,res)
{
 let brands = [];
  let sizes = [];
  let filteredCubes = [];
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

  //filter by brand
  if(req.query.brand)
  {
    for (let i = 0; i < cubes.length; i++)
    {
        if(cubes[i].cube_brand === req.query.brand)
        {
            filteredCubes = [...filteredCubes, cubes[i]];
        }
    }
  }else
  {
    filteredCubes = [...cubes];
  }
  res.render("home",
    {
        brands: brands,
        cubes: filteredCubes,
    }
  );
}
//TODO
//NEED TO BE ABLE TO EDIT CUBES (AND DELETE)
