const express = require("express");

const router = express.Router();

const Usuario = require("../controllers/controller");

router.post("/login", Usuario.autenticar);
router.get("/listar", Usuario.listar);

module.exports = router;