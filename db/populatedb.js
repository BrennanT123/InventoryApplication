const { argv } = require('node:process');


const { Client } = require("pg");
require("dotenv").config();


const SQL = `
INSERT INTO cubes (cube_name, cube_size, cube_brand)
VALUES
('Gan 15', '3x3', 'GAN'),
('AoSu', '4x4', 'MoYu'),
('YJ YuHu', 'Megaminx', 'YJ');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:5432/rubiks_cube_inventory`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
