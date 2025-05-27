const pool = require("./pool");

async function getAllCubes() {
  const { rows } = await pool.query("SELECT * FROM cubes");
  return rows;
}

async function addNewCube(newCube) {
  await pool.query(
    "INSERT INTO cubes (cube_name, cube_size, cube_brand) VALUES ($1, $2, $3)",
    [newCube.cube_name, newCube.cube_size, newCube.cube_brand]
  );
}

async function searchCubes(search) {
  const { rows } = await pool.query(
    `SELECT * FROM cubes 
     WHERE cube_name ILIKE $1 
        OR cube_brand ILIKE $1 
        OR cube_size ILIKE $1`,
    [`%${search}%`]
  );
  return rows;
}

async function getCubeForUpdate(id) {
  const { rows } = await pool.query(`SELECT * FROM cubes WHERE id = ($1)`, [
    id,
  ]);
  return rows;
}

async function sendCubeUpdate(updatedCube,id) {
  await pool.query(
    `UPDATE cubes
        SET cube_name = ($1), cube_brand = ($2), cube_size = ($3)
        WHERE id = ($4)`,
    [
      updatedCube.cube_name,
      updatedCube.cube_brand,
      updatedCube.cube_size,
      id,
    ]
  );
}

async function deleteCube(cubeID){
    await pool.query(
        `DELETE FROM cubes WHERE id = ($1)`,[cubeID]
    );
}
module.exports = {
  getAllCubes,
  addNewCube,
  searchCubes,
  getCubeForUpdate,
  sendCubeUpdate,
  deleteCube,
};
