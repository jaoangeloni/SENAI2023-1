const express = require("express");
const cors = require("cors");

const clienteRoute = require("./src/routes/clienteRoute");
const avaliacaoRoute = require("./src/routes/avaliacaoRoute");
const restauranteRoute = require("./src/routes/restauranteRoutes");
const categoriasRoute = require("./src/routes/categoriasRoutes");
const cardapioRoute = require("./src/routes/cardapioRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(clienteRoute);
app.use(avaliacaoRoute);
app.use(restauranteRoute);
app.use(categoriasRoute);
app.use(cardapioRoute);

app.listen(3000, () => {
    console.log("rodando");
});