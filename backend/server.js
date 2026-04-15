const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

let states = {};

// SALVAR estado por usuário
app.post("/save", (req, res) => {
  const incomingState = req.body;
  const email = incomingState?.usuario?.email;

  if (!email) {
    return res
      .status(400)
      .json({ ok: false, error: "E-mail do usuário não informado." });
  }

  states[email] = incomingState;
  console.log(`Estado salvo para ${email}`);
  res.json({ ok: true });
});

// CARREGAR estado por usuário
app.get("/load", (req, res) => {
  const email = req.query.email;

  if (!email) {
    return res.json(null);
  }

  const userState = states[email] || null;
  res.json(userState);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
