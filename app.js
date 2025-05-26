// app.js
const express = require("express");
const app = express();
const path = require("node:path");
const inventoryRouter = require("./routes/inventoryRouter");
require("dotenv").config();


// Set EJS as the view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Serve static assets (CSS, images, etc.)
app.use(express.static(path.join(__dirname, "public")));

// Parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Mount the users router
app.use("/", inventoryRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`));
 