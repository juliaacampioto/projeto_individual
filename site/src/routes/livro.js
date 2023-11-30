var express = require("express");
var router = express.Router();

var livroController = require("../controllers/livroController");

router.post("/registrarLivro", function (req, res) {
    livroController.registrarLivro(req, res);
});

router.get("/listarLivro/:idUsuario", function (req, res) {
    livroController.listarLivro(req, res);
});

router.get("/buscarLivro/:idUsuario", function (req, res) {
    livroController.buscarLivro(req, res);
});

router.get("/ultimoLivro/:idUsuario", function (req, res) {
    livroController.ultimoLivro(req, res);
});

router.get("/ultimaData/:idUsuario", function (req, res) {
    livroController.ultimaData(req, res);
});

router.get("/relembrarLeituras/:idUsuario", function (req, res) {
    livroController.relembrarLeituras(req, res);
});

router.post("/livroFav", function (req, res) {
    livroController.livroFav(req, res);
});

router.get("/mostrarLivroFav/:idUsuario", function (req, res) {
    livroController.mostrarLivroFav(req, res);
});

router.get("/mostrarAutorFav/:idUsuario", function (req, res) {
    livroController.mostrarAutorFav(req, res);
});

module.exports = router;