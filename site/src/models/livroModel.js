var database = require("../database/config");

function registrarLivro(nomeLivro, genero, autor, dtInicio, fkUsuario) {
    console.log("LIVRO REGISTRADO COM SUCESSO! \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registrarLivro()", nomeLivro, genero, autor, dtInicio, fkUsuario);
    var instrucao = `
        INSERT INTO livro_novo (nomelivro, genero, autor, dtInicio, fkUsuario) VALUES ('${nomeLivro}', '${genero}', '${autor}', '${dtInicio}', '${fkUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarLivro(idUsuario) {
    console.log("DASH MODEL ACESSADO! \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> \n\n function listarLivro()", idUsuario);
    var instrucao = `
    select count(idLivroNovo) as qtdLivros from livro_novo inner join cadastro on fkUsuario = idUsuario where idUsuario = ${idUsuario}
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarLivro(idUsuario) {
    console.log("ACESSEI O LIVRO MODEL para buscar quantidade de livros lidos por mês, function buscarLivros()", idUsuario);

    var instrucao = `   
    SELECT COUNT(idLivroNovo) AS qtd, MONTH(dtInicio) AS mes 
    FROM livro_novo 
    WHERE fkUsuario = ${idUsuario}  
    AND dtInicio BETWEEN '2023-01-01' AND '2023-12-31' 
    GROUP BY mes order by month(dtInicio)
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function ultimoLivro(idUsuario) {
    console.log("ACESSEI O LIVRO MODEL para buscar o livro que o usuário está lendo, function ultimoLivro()", idUsuario);

    var instrucao = `   
    select nomeLivro from livro_novo where fkUsuario = ${idUsuario} order by idLivroNovo desc limit 1
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function ultimaData(idUsuario) {
    console.log("ACESSEI O LIVRO MODEL para buscar a data que o usuário começou a ler, function ultimaData()", idUsuario);

    var instrucao = `   
    select dtInicio from livro_novo where fkUsuario = ${idUsuario} order by idLivroNovo desc limit 1
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function relembrarLeituras(idUsuario) {
    console.log("ACESSEI O LIVRO MODEL para buscar o livro que o usuário está lendo, function relembrarLeituras()", idUsuario);

    var instrucao = `   
    select  nomeLivro, autor from livro_novo where fkUsuario = ${idUsuario}`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    registrarLivro,
    listarLivro,
    buscarLivro, 
    ultimoLivro,
    ultimaData,
    relembrarLeituras
};