const express = require("express");
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

routes.get("/:idProduto", async function (req, res) {
  const {idProduto} = req.params;
    try{
        const doc = await Produto.find({
            _id: idProduto,
        }).select("_id nome preco descricao");
        res.send(doc)
    } catch(err) {
        next(err);
    }
});

routes.patch("/:idProduto", function (req, res) {
  const { produtoId } = req.params;
  const updateParams = {};
  for (param of Object.keys(req.body)) {
    updateParams[param] = req.body[param];
    console.log("doc: " + updateParams[param]);
  }
  updateParams
  Produto.updateOne({ ProdutoId: produtoId }, { $set: updateParams })
    .then((doc) => {
      console.log(doc);
      res.status(204).send({});
    })
    .catch((err) => {
      console.log(err);
    });
});

routes.delete("/:idProduto", async function (req, res) {
  const {idProduto} = req.params;
    try{
        const doc = await Produto.deleteOne({
            _id: idProduto,
        })
        res.status(204).send({});
    } catch(err) {
        res.send({mensagem: err.message, erro: err})
    }
});

module.exports = routes;
