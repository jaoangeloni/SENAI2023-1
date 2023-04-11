const express = require("express");

const router = express.Router();

const Cliente = require("../controllers/clientes");

router.post("/cliente", Cliente.adicionar);
router.get("/clientes", Cliente.listar);
router.post("/login", Cliente.autenticar);
router.delete("/cliente/:id", Cliente.excluir)

module.exports = router;