const express = require("express");
const router = express.Router();

const tarefa = require('../controllers/tarefa');

router.post('/create', tarefa.cadastrar);
router.get('/', tarefa.app);
router.put('/update', tarefa.alterar);
router.delete('/del/:id', tarefa.excluir);

module.exports = router