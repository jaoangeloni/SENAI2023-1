const express = require ("express")

const router = express.Router();

const Operacao = require("../controller/operacoes.js");

router.get("/calcular/:operacao", Operacao.calcular);

module.exports = router;