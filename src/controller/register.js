const { openDb, setupDatabase } = require("../database/database");

exports.Register = (req, res) => {
  res.render("register");
};

exports.Cadastrar = async (req, res) => {
  const { name, surname, neighborhood, street, housenumber, Telefone } =
    req.body;

  const newNumber = Number(housenumber);

  try {
    const db = await openDb();
    await db.run(
      "INSERT INTO DIZIMISTAS_TOTAIS (dizimista_nome, dizimista_sobrenome, dizimista_bairro, dizimista_rua, dizimista_numero_casa, dizimista_telefone) VALUES (?, ?, ?, ?, ?, ?)",
      [name, surname, neighborhood, street, newNumber, Telefone],
    );
    res.render("register");
  } catch (e) {
    console.error(error);
  }
};

exports.GetAll = async (req, res) => {
  try {
    const db = await openDb();
    const dizimistas = await db.all(
      "SELECT * FROM DIZIMISTAS_TOTAIS ORDER BY dizimista_id DESC",
    );
    res.render("listAll", { dizimistas });
  } catch (e) {
    console.log(e);
  }
};

exports.Delete = async (req, res) => {
  const { id } = req.params;

  try {
    const db = await openDb();
    const dizimistas = await db.run(
      "DELETE FROM DIZIMISTAS_TOTAIS WHERE dizimista_id = ?",
      id,
    );
    res.redirect("/cadastro-geral/editar");
  } catch (e) {
    console.log(e);
  }
};
