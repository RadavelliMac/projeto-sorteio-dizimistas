const express = require("express");
const router = express.Router();

const Home = require("./src/controller/home");
const Register = require("./src/controller/register");
const MonthlyRegister = require("./src/controller/monthlyRegister");
const PrizedrawTither = require("./src/controller/prizedrawTither");
const PrizedrawGeneral = require("./src/controller/prizedrawGeneral");

router.get("/", Home.Home);

router.get("/cadastro-geral", Register.Register);

router.get("/cadastro-mensal", MonthlyRegister.MonthlyRegister);

router.get("/sorteio-dizimista", PrizedrawTither.PrizedrawTither);

router.get("/sorteio-geral", PrizedrawGeneral.PrizedrawGeneral);

module.exports = router;
