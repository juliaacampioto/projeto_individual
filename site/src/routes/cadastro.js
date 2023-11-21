var express = require("express");
var router = express.Router();

var cadastroControllers = require("../controllers/cadastroControllers");

router.post("/cadastrar", function (req, res){
    cadastroControllers.cadastrar(req, res);
});

module.exports = router;