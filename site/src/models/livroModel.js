var database = require("../database/config");

function registrarLivro(nome, genero, autor, dtInicio) {
    var instrucao = `
        INSERT INTO livro_novo (nome, genero, autor, dtInicio) VALUES ('${nome}', '${genero}', '${autor}', '${dtInicio}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    registrarLivro
};