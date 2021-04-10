const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config({
  path: "./.env",
});

// Database
require("./db/conn");

// Recognize requests as JSON
app.use(express.json());

const PORT = process.env.PORT;

// Lnking route files
app.use(require("./router/stockProvider"));
app.use(require("./router/stock"));

// Server Listening
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
