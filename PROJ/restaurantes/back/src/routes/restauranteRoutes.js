const express = require("express");

const router = express.Router();

const Restaurante = require("../controllers/restaurante");

router.get("/restaurante", Restaurante.listar);
router.get("/restaurante/:id", Restaurante.buscar);
router.get("/restaurante/categoria/:id", Restaurante.filtrar);

module.exports = router;