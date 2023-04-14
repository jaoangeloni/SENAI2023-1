const express = require("express");

const router = express.Router();

const Cardapio = require("../controllers/cardapio");

router.get("/cardapio", Cardapio.listar);
router.get("/cardapio/:id", Cardapio.buscar);
router.get("/cardapio/restaurante/:id", Cardapio.filtrar);

module.exports = router;