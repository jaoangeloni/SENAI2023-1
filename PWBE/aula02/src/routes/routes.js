const express = require("express");

const router = express.Router();

const aluno = require("../controllers/aluno")

router.get("/listar", aluno.listar);
router.post("/criar", aluno.criar);
router.put("/atualizar", aluno.atualizar);
router.delete("/apagar", aluno.apagar);

module.exports = router;