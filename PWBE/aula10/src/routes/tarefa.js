const express = require("express");
const router = express.Router();

const tarefa = require('../controllers/tarefa');

router.get('/', tarefa.app);
router.delete('/del/:id', tarefa.excluir);

module.exports = router