const { openDb, setupDatabase } = require("../database/database");

exports.MonthlyRegister = (req, res) => {
  res.render("monthlyRegister");
};

exports.Cadastrar = async (req, res) => {
  const { tither } = req.body;
  const id = Number(tither);

  try {
    const db = await openDb();
    const dizimistas = await db.run(
      "INSERT INTO DIZIMISTAS_DO_MES (dizimista_do_mes_id) VALUES (?)",
      id,
    );
    res.redirect("/cadastro-mensal");
  } catch (e) {
    console.log(e);
  }
};

exports.GetAll = async (req, res) => {
  try {
    const db = await openDb();
    const dizimistas = await db.all(
      "SELECT * FROM DIZIMISTAS_DO_MES ORDER BY dizimista_do_mes_id DESC",
    );
    res.render("listAllMonthlyTithers", { dizimistas });
  } catch (e) {
    console.log(e);
  }
};

exports.Delete = async (req, res) => {
  const { dizimista_id } = req.params;

  try {
    const db = await openDb();
    const dizimistas = await db.run(
      "DELETE FROM DIZIMISTAS_DO_MES WHERE dizimista_id = ?",
      id,
    );
    res.redirect("/cadastro-mensal/editar");
  } catch (e) {
    console.log(e);
  }
};
