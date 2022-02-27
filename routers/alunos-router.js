var express = require('express');
const router = express.Router();

const alunoController = require('../controllers/alunos-controller');

router.get('/', alunoController.listar_alunos);

router.get('/cadastrarAluno', alunoController.cadastrar_alunos_get);

router.post('/cadastrarAluno', alunoController.cadastrar_aluno_post);

router.get('/deletarAluno/:id', alunoController.deletar_aluno);

router.get('/editarAluno/:id', alunoController.editar_aluno_get);

router.post('/editarAluno', alunoController.editar_aluno_post);

module.exports = router;