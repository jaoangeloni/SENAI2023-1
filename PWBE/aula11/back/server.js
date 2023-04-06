const express = require("express");
const cors = require("cors");

const PacientesRouter = require("./src/routes/paciente");

const app = express();

app.use(cors());
app.use(express.json());

app.use(PacientesRouter);

app.listen(3000, () => {
  console.log("Rodando lisin");
});