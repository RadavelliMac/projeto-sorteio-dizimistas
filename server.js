const express = require("express");
const path = require("path");

const dotenv = require("dotenv").config({
  path: path.resolve(__dirname, ".env"),
});

const { setupDatabase } = require("./src/database/database");

const PORT = process.env.PORT;

const app = express();

const routes = require("./routes");

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "public")));

app.use(routes);

setupDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
});
