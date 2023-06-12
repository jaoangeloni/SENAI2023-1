const express = require("express");

const router = express.Router();

const Usuario = require("../controllers/controller");

router.post("/login", Usuario.autenticar);
router.get("/listar", Usuario.listar);
router.put('/atualizar', Usuario.alterar);

module.exports = router;