const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/usuarios", function (req, res) {
  const usuarios = [
    { id: 1, nome: "Karen Reis", email: "karen@gmail.com" },
    { id: 2, nome: "Adriano Oliveira", email: "oliadriano@gmail.com" },
    { id: 3, nome: "Miguel Menezes", email: "mmiguel@gmail.com" },
  ];

  res.json(usuarios);
});

app.get("/usuarios/:id", function (req, res) {
  const id = req.params.id;
  const usuario = usuarios.find((usuario) => usuario.id === id);

  if (usuario) {
    res.json(usuario);
  } else {
    res.status(404).send("*** Usuário não encontrado ***");
  }
});

app.post("/usuarios", function (req, res) {
  const novoUsuario = req.body;

  usuarios.push(novoUsuario);

  res.json({ id: usuarios.length - 1 });
});

app.get("/saudacao/:nome", function (req, res) {
  const nome = req.params.nome;

  res.send(`Olá, ${nome}! Como posso ajudá-lo hoje?`);
});

app.get("/", function (req, res) {
  res.send("Bem-vindo ao meu web service!");
});

app.get("/sair", function (req, res) {
  res.send("Volte sempre ao meu web service!");
});

app.get("/interacoes", function (req, res) {
  const interacoes = [
    "Oi!",
    "Como você está?",
    "Espero que esteja gostando do meu web service! Foi Feito com muito carinho ;)",
    "Tem alguma dúvida?",
    "Você tem algo mais no que eu posso te ajudar?",
  ];

  const mensagem = interacoes[Math.floor(Math.random() * interacoes.length)];

  res.send(mensagem);
});

app.listen(3000, function () {
  console.log("Servidor rodando na porta 3000");
});
