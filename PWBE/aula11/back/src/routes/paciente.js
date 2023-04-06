const express = require('express');

const Pacientes = require('../controllers/paciente');

const router = express.Router();

router.post('/paciente', Pacientes.cadastrar);
router.get('/pacientes', Pacientes.listar);
router.put('/pacientes/:id', Pacientes.alterar);
router.delete('/paciente/:id', Pacientes.remover);

module.exports = router;