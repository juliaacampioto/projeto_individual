var livroModel = require("../models/livroModel");

function registrarLivro(req, res) {
    var nomeLivro = req.body.nomeLivroServer;
    var genero = req.body.generoServer;
    var autor = req.body.autorServer;
    var dtInicio = req.body.dtinicioServer;
    var fkUsuario = req.body.fkUsuarioServer;

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
    if (fkUsuario == undefined) {
        res.status(400).send("A fkUsuario está undefined!");
    }


    livroModel.registrarLivro(nomeLivro, genero, autor, dtInicio, fkUsuario).then(function(resposta){
        res.status(200).send("Dados inserido com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function listarLivro(req, res) {
    var idUsuario = req.params.idUsuario;

    console.log(`estou na funcao listar qtd diario do controller`);
    livroModel.listarLivro(idUsuario)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);

                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "Houve um erro ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function buscarLivro(req, res) {
    var idUsuario = req.params.idUsuario;

    livroModel.buscarLivro(idUsuario)
        .then(
            function (resultado) {                
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "Houve um erro",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function ultimoLivro(req, res) {
    var idUsuario = req.params.idUsuario;

    livroModel.ultimoLivro(idUsuario).then((resposta) => {
        res.status(200).json(resposta);
    });

}

function ultimaData(req, res) {
    var idUsuario = req.params.idUsuario;

    livroModel.ultimaData(idUsuario).then((resposta) => {
        res.status(200).json(resposta);
    });

}

// function relembrarLeituras(req, res) {
//     var idUsuario = req.params.idUsuario;

//     livroModel.ultimoLivro(idUsuario)
//         .then(
//             function (resultado) {                
//                 if (resultado.length > 0) {
//                     res.status(200).json(resultado);
//                 } else {
//                     res.status(204).send("Nenhum resultado encontrado!");
//                 }
//             }
//         )
//         .catch(
//             function (erro) {
//                 console.log(erro);
//                 console.log(
//                     "Houve um erro",
//                     erro.sqlMessage
//                 );
//                 res.status(500).json(erro.sqlMessage);
//             }
//         );
// }


module.exports = {
    registrarLivro,
    listarLivro,
    buscarLivro,
    ultimoLivro,
    ultimaData
}