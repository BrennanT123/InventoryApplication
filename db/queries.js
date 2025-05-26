const pool = require("./pool");


async function getAllCubes()
{
    const {rows} = await pool.query("SELECT * FROM cubes");
    return rows;
}

async function addNewCube(newCube)
{
    await pool.query("INSERT INTO cubes (cube_name, cube_size, cube_brand) VALUES ($1, $2, $3)", [newCube.cube_name, newCube.cube_size, newCube.cube_brand]);
}

module.exports = {
    getAllCubes,
    addNewCube,
};