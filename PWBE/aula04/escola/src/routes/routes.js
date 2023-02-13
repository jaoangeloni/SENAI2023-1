const express = require("express");
const router = express.Router();

const Alunos = require('../controllers/alunos');
const Professores = require('../controllers/professores');
const Turmas = require ('../controllers/turmas');

router.get('/', Alunos.teste);
router.post('/aluno', Alunos.criar);
router.post('/alunos', Alunos.criarVarios);
router.get('/alunos', Alunos.listar);
router.get('/aluno/:ra', Alunos.buscar);
router.put('/aluno/:ra', Alunos.atualizar);
router.delete('/aluno/:ra', Alunos.deletar);

router.post('/turma', Turmas.criar);
router.post('/turmas', Turmas.criarVarios);
router.get('/turmas', Turmas.listar);
router.get('/turma/:id', Turmas.buscar);
router.put('/turma/:id', Turmas.atualizar);
router.delete('/turma/:id', Turmas.deletar);

router.post('/prof', Professores.criar);
router.post('/profs', Professores.criarVarios);
router.get('/profs', Professores.listar);
router.get('/prof/:id', Professores.buscar);
router.put('/prof/:id', Professores.atualizar);
router.delete('/prof/:id', Professores.deletar);

module.exports = router