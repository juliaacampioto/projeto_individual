var livroModel = require("../models/livroModel");

function registrarLivro(req, res) {
    var nomeLivro = req.body.nomeLivroServer;
    var genero = req.body.generoServer;
    var autor = req.body.autorServer;
    var dtInicio = req.body.dtinicioServer;
    var fkCadastro = req.body.fkCadastroServer;

    // var fkCadastro = req.body.fkCadastro;

    if (nomeLivro == undefined) {
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
    if (fkCadastro == undefined) {
        res.status(400).send("A fkCadastro está undefined!");
    }


    livroModel.registrarLivro(nomeLivro, genero, autor, dtInicio, fkCadastro).then(function(resposta){
        res.status(200).send("Dados inserido com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    registrarLivro
}