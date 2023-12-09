const express = require("express");
const app = express();

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
