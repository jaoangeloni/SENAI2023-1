const express = require("express");
const cors = require("cors");

const clienteRoute = require("./src/routes/clienteRoute");
const avaliacaoRoute = require("./src/routes/avaliacaoRoute");

const app = express();

app.use(cors());
app.use(express.json());

app.use(clienteRoute);
app.use(avaliacaoRoute);

app.listen(3000, () => {
    console.log("rodando");
});