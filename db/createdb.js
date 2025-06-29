const { argv } = require('node:process');


const { Client } = require("pg");
require("dotenv").config();


const SQL = `
DROP TABLE IF EXISTS cubes;

CREATE TABLE cubes (
  id SERIAL PRIMARY KEY,
  cube_name TEXT,
  cube_size TEXT,
  cube_brand TEXT
);

`;

async function main() {
  console.log("creating table...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
