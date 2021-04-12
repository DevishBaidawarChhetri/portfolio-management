const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

const app = express();
dotenv.config({
  path: "./.env",
});

// Database
require("./db/conn");

// Recognize requests as JSON
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT;

// Lnking route files
app.use(require("./router/user"));
app.use(require("./router/stock"));
app.use(require("./router/stockProvider"));
app.use(require("./router/dashboard"));

// Server Listening
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
