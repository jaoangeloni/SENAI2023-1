const express = require("express");
const router = express.Router();

const tarefa = require('../controllers/tarefa');

router.get('/', tarefa.app);

module.exports = router