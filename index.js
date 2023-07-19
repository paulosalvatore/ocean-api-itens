const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares

app.use(cors());
app.use(express.json());

// Dados

const item1 = {
  nome: "Rick Sanchez",
  imagem:
    "https://static.tvtropes.org/pmwiki/pub/images/abcb6534_7913_4eb1_a7a5_62b081ebc628.png",
};

const item2 = {
  nome: "Morty Smith",
  imagem:
    "https://comicvine.gamespot.com/a/uploads/scale_medium/6/66303/4469088-tumblr_inline_n0aleph3fl1r8rr6o.jpg",
};

const item3 = {
  nome: "Summer Smith",
  imagem:
    "https://images.squarespace-cdn.com/content/v1/5616ac17e4b018d366f57f53/1616952566614-0IEBMBBMXMO30Z37PTMN/summer+smith+soundboard",
};

const itens = [item1, item2, item3];

app.get("/", function (req, res) {
  return res.send({
    mensagem: "Acesse o endpoint /itens para obter os dados",
  });
});

app.get("/itens", function (req, res) {
  return res.send(itens);
});

const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
