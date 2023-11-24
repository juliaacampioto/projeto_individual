var database = require("../database/config");

function registrarLivro(nomeLivro, genero, autor, dtInicio) {
    console.log("LIVRO REGISTRADO COM SUCESSO! \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registrarLivro()", nomeLivro, genero, autor, dtInicio);
    var instrucao = `
        INSERT INTO livro_novo (nome, genero, autor, dtInicio) VALUES ('${nomeLivro}', '${genero}', '${autor}', '${dtInicio}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    registrarLivro
};