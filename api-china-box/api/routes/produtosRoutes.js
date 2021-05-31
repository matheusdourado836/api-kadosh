const express = require("express");
const mongoose = require("mongoose");
const Produto = require("../models/produto");

const routes = express.Router();

routes.get("/", (req, res) => {
  let { pagina } = req.headers;
  pagina = pagina === undefined ? 0 : pagina;
  const elementos = 3,
    skipElementos = pagina * elementos;

  Produto.find()
    .skip(skipElementos)
    .limit(elementos)
    .lean()
    .then((doc) => {
      res.send(doc);
      console.log("GET PRODUTO Executado com Sucesso!");
    })
    .catch((err) => {
      next(err);
    });
});

routes.post("/", async (req, res) => {
  try {
    let produto = new Produto(req.body);
    const doc = await produto.save();
    res.send(doc);
  } catch (err) {
    if (err.name === "MongoError" && err.code === 11000) {
      res
        .status(409)
        .send({ mensagem: "Produto já existente!", erro: err.message });
    } else {
      console.log("Deu ruim");
    }
  }
});

routes.get("/:idProduto", function (req, res) {
  const { produtoId } = req.params;
    Produto.find({
      ProdutoId: produtoId,
    })
      .then((doc) => {
        console.log(doc);
        res.send(doc);
        console.log("GET PRODUTO com ID Executado com Sucesso!");
      })
      .catch((err) => {
        console.log(err);
        next(err);
      });
});

routes.patch("/:idProduto", function (req, res) {
  const { produtoId } = req.params;
  const updateParams = {};
  for (const param of Object.keys(req.body)) {
    updateParams[param] = req.body[param];
  }
  Produto.updateOne({ ProdutoId: produtoId }, { $set: updateParams })
    .then((doc) => {
      console.log(doc);
      res.status(204).send();
      console.log("PATCH  PRODUTO Executado com Sucesso!");
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
});

routes.delete("/:idProduto", function (req, res) {
  const { produtoId } = req.params;
  Produto.remove({
    ProdutoId: produtoId,
  })
    .then((doc) => {
      console.log(doc);
      res.status(204).send();
      console.log("DELETE PRODUTO Executado com Sucesso!");
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
});

module.exports = routes;
