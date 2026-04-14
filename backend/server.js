const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let state = null;

// SALVAR
app.post("/save", (req, res) => {
  state = req.body;
  console.log("Estado salvo:", state);
  res.json({ ok: true });
});

// CARREGAR
app.get("/load", (req, res) => {
  res.json(state);
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
