const express = require("express");

const router = express.Router();

const Avaliacao = require("../controllers/avaliacao");

router.post("/avaliar", Avaliacao.avaliar);
router.get("/avaliacao", Avaliacao.listar);
router.get("/avaliacao/restaurante/:id", Avaliacao.filtrar);
router.get("/avaliacao/cliente/:id", Avaliacao.filtrarCliente);


module.exports = router;