const express = require("express");

const router = express.Router();

const Categorias = require("../controllers/categorias");

router.get("/categorias", Categorias.listar);
router.get("/categorias/:id", Categorias.buscar);

module.exports = router;