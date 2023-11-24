var livroModel = require("../models/livroModel");

function registrarLivro(req, res) {
    var nome = req.body.nome;
    var genero = req.body.genero;
    var autor = req.body.autor;
    var dtInicio = req.body.dtinicio;

    if (nome == undefined) {
        res.status(400).send("O nome do livro está undefined!");
    }
    if (genero == undefined) {
        res.status(400).send("O gênero está undefined!");
    }
    if (autor == undefined) {
        res.status(400).send("O autor está undefined!");
    }
    if (dtInicio == undefined) {
        res.status(400).send("A data de início está undefined!");
    }


    livroModel.registrarLivro(nome, genero, autor, dtInicio).then(function(resposta){
        res.status(200).send("Dados inserido com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    registrarLivro
}