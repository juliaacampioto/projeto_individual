var express = require("express");
var router = express.Router();

var cadastroController = require("../controllers/cadastroControllers");

router.post("/cadastrar", function (req, res){
    cadastroController.cadastrar(req, res);
});

router.post("/autenticar", function (req, res){
    cadastroController.autenticar(req, res);
});

// router.get("/cadastrar", function (req, res) {
//     cadastroController.listar(req, res);
// });

module.exports = router;