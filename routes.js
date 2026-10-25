const express = require("express");
const router = express.Router();

const Home = require("./src/controller/home");

router.get("/", Home.Home);

module.exports = router;
