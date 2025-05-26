const { Pool } = require("pg");
require("dotenv").config();


module.exports = new Pool({
  host: "localhost", // or wherever the db is hosted
  user: process.env.DB_USER,
  database: "rubiks_cube_inventory",
  password: process.env.DB_PASSWORD,
  port: 5432, // The default port
});