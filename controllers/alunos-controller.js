const aluno_bd = require('../models/alunos-models');

// listar os alunos cadastrados
exports.listar_alunos = (req, res) => {
    aluno_bd.find({}, (err, aluno) => {
        if (err) { // se houver erro...
            return res.status(500).send('Erro ao listar alunos');
        }
        res.render('views/pages/alunos', {listaAlunos:aluno});
    });  
};

// renderizando página formAlunos
exports.cadastrar_alunos_get = (req, res) => {
    res.render('views/pages/formAlunos');
}

// post do cadastro de alunos
exports.cadastrar_aluno_post = (req, res) => {
    let aluno = new aluno_bd(); // criando um objeto do tipo Produtos
    aluno.nomeAluno = req.body.nomeAluno;
    aluno.nomeResponsavel = req.body.nomeResponsavel;
    aluno.contato = req.body.contato;
    aluno.endereco = req.body.endereco;
    aluno.ra = req.body.ra;

    aluno.save((err) => {
        if (err) {
            return res.status(500).send('Erro ao cadastrar aluno');
        }
        return res.redirect('/alunos');
    })
}

// deletar aluno
exports.deletar_aluno = (req, res) => {
    var chave = req.params.id;

    aluno_bd.deleteOne({_id:chave}, (err, result) => {
        if (err) {
            return res.status(500).send('Erro ao excluir registro');
        }
    })
    res.redirect('/alunos');
}

// get da página editar aluno
exports.editar_aluno_get = (req, res)=>{
    var id = req.params.id;
    aluno_bd.findById(id, (err, aln)=>{
        if(err)
            return res.status(500).send("Erro ao editar");
        res.render("views/pages/editarAluno",{aln}); 
    });
};

// post da página editar aluno
exports.editar_aluno_post = (req, res) => {
    let id = req.body.id;
    aluno_bd.findById(id, (err, aluno) => {
        if(err)
            return res.status(500).send("Erro ao editar");
        
        aluno.nomeAluno = req.body.nomeAluno;
        aluno.nomeResponsavel = req.body.nomeResponsavel;
        aluno.contato = req.body.contato;
        aluno.endereco = req.body.endereco;
        aluno.ra = req.body.ra;

        aluno.save((err) => {
            if (err)
                return res.status(500).send('Erro ao editar');
            return res.redirect('/alunos');
        })
    })
}