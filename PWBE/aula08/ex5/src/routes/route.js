const express = require ("express")

const router = express.Router();

const Tarefa = require("../controller/tarefas.js");

router.get("/tarefas", Tarefa.listar);
router.post("/nova", Tarefa.criar);

module.exports = router;