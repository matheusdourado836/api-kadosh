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

routes.get("/:idPedido", async function (req, res) {
  const { idPedido } = req.params;
  try{
    const doc = await Pedido.find({
        _id: idPedido,
    }).select("_id nomeUsuario data lista");
    res.send(doc)
} catch(err) {
    console.log(err);
}
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
