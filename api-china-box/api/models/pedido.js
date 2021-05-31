const mongoose = require("mongoose");

var produtoSubSchema = new mongoose.Schema(
  {
  ProdutoId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "produtos"
  },
  quantidade: {
      type: Number,
      defaut: 1
  },
  },
  { _id: false }
);

// Declare the Schema of the Mongo model
var pedidoSchema = new mongoose.Schema({
  data:{
      type:Date,
      required:Date.now,
  },

  nomeUsuario:{
      type:String,
      required:true,
  },

  lista: [produtoSubSchema]
});

//Export the model
module.exports = mongoose.model("pedido", pedidoSchema);
