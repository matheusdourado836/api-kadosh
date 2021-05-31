const express = require("express");
const routes = express.Router();
const Pedido = require("../models/pedido");

routes.get("/", (req, res) => {
  Pedido.find()
  .populate("lista.idProduto")
  .then((doc) => {
    console.log(doc);
    res.send(doc);
    console.log("GET PEDIDO Executado com Sucesso!");
  })
  .catch((err) => {
    console.log(err);
    next(err);
  });
});

routes.post("/", async (req, res) => {
  const {nomeUsuario, lista, data} = req.body
   try{
    const pedido = new Pedido({
       nomeUsuario: nomeUsuario,
       lista: lista,
       data: data
    });
    const doc = await pedido.save();
    res.status(204).send({});
    console.log("POST PEDIDO Executado com Sucesso!");
} catch (err) {
    res.send({mensagem: err.message, erro: err})
}
});

routes.get("/:idPedidos", function (req, res) {
  const { pedidoId } = req.params;
  Pedido.find({
    _id: pedidoId,
  })
    .then((doc) => {
      console.log(doc);
      res.send(doc);
      console.log("GET com ID PEDIDO Executado com Sucesso!");
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
});

routes.delete("/:pedidoId", function (req, res) {
  const { pedidoId } = req.params;
  Pedido.remove({
    _id: pedidoId,
  })
    .then((doc) => {
      console.log(doc);
      res.status(204).send();
      console.log("DELETE PEDIDO Executado com Sucesso!");
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
});

module.exports = routes;
