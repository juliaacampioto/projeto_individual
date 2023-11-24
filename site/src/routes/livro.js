var express = require("express");
var router = express.Router();

var livroController = require("../controllers/livroController");

router.post("/livro", function (req, res) {
    livroController.registrarLivro(req, res);
});

module.exports = router;