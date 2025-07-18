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
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
