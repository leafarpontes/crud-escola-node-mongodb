var mongoose = require('mongoose');

// criando o modelo que irá compor a collection do banco
const Alunos = mongoose.model('alunos', {
    nomeAluno: String,
    nomeResponsavel: String,
    contato: Number,
    endereco: String,
    ra: Number,
})

module.exports = Alunos;