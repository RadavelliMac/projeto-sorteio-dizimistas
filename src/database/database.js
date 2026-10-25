const Database = require("better-sqlite3");
const path = require("node:path");
const fs = require("node:fs");

const pastaDados = path.join(__dirname, "../../data");

fs.mkdirSync(pastaDados, { recursive: true });

const caminhoBanco = path.join(pastaDados, "comunidade.db");

const db = new Database(caminhoBanco);

// Habilita a validação das chaves estrangeiras
db.pragma("foreign_keys = ON");

module.exports = db;
