const express = require("express");

const router = express.Router();

const Avaliacao = require("../controllers/avaliacao");

router.post("/avaliar", Avaliacao.avaliar);
router.get("/avaliacao", Avaliacao.listar);

module.exports = router;