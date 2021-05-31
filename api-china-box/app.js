const express = require("express");
const mongoose = require("mongoose");

const produtosRoutes = require("./api/routes/produtosRoutes");
const pedidosRoutes = require("./api/routes/pedidosRoutes");

const app = express();
const port = 3000 || 4000;
const dbURL = "mongodb+srv://new-user:Mthw021000@cluster0.06m9n.mongodb.net/kadosh-business?retryWrites=true&w=majority";

mongoose.connect(
  dbURL,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("Mongo DB Connectou");
    } else {
      console.log(`Erro Mongo DB ${err}`);
    }
  }
);

app.use(express.json());
app.use("/produtos", produtosRoutes);
app.use("/pedidos", pedidosRoutes);

app.use((req, res, next) => {
  console.log("middleware final");

  const erro = new Error("URL não existente");
  erro.statusCode = 404;
  next(erro);
});

app.use((err, req, res, next) => {
  console.log("middleware finalllll");
  const statusCode = err.statusCode || 500;
  res.status(statusCode).send({ mensagem: err.message, erro: err });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
