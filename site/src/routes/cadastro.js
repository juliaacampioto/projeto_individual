var express = require("express");
var router = express.Router();

var cadastroControllers = require("../controllers/cadastroControllers");

router.post("/cadastrar", function (req, res){
    cadastroControllers.cadastrar(req, res);
});

router.post("/autenticar", function (req, res){
    cadastroControllers.autenticar(req, res);
});

// router.get("/cadastrar", function (req, res) {
//     cadastroController.listar(req, res);
// });

module.exports = router;