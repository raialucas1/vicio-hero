const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// Servir arquivos estáticos do frontend
app.use(express.static(path.join(__dirname, "public")));

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

// Rota principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
