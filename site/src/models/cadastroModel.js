var database = require("../database/config")

function cadastrar(nome, sobrenome, email, senha) {
    var instrucao = `
        INSERT INTO cadastro (nome, sobrenome, email, senha) VALUES ('${nome}', '${sobrenome}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);    
}

module.exports = {
    cadastrar
};