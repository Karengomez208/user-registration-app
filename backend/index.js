const express = require("express");
const bodyParser = require("body-parser");
const { pool } = require("./db");
const app = express();

app.use(bodyParser.json());

app.post("/api/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    await pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)",
      [name, email, password]
    );
    res.send("Usuario registrado correctamente");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error al registrar usuario");
  }
});

app.listen(3000, () => console.log("Servidor en http://localhost:3000"));
