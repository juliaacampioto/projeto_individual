var database = require("../database/config")

// function listar() {
//     var instrucao = `
//         SELECT * FROM carro;
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// }

function cadastrar(nome, sobrenome, email, senha) {
    var instrucao = `
        INSERT INTO cadastro (nome, sobrenome, email, senha) VALUES ('${nome}', '${sobrenome}', '${email}', ${senha});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);    
}

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT idCadastro, nome, email, senha FROM cadastro WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar, 
    autenticar
    // listar
};