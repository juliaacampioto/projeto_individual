create database ProjetoIndividual;

use ProjetoIndividual;

create table cadastro(
idUsuario int primary key auto_increment,
nome varchar(30) not null,
sobrenome varchar(50) not null,
email varchar(50) unique not null, 
senha varchar(20) not null);

create table livro_novo(
idLivroNovo int primary key auto_increment,
nomeLivro varchar(30),
genero varchar(10),
autor varchar(50),
dtInicio date,
fkUsuario int, 
constraint fkUsuario foreign key (fkUsuario) references cadastro (idUsuario)) auto_increment = 100;

create table preferencias (
idPreferencias int primary key auto_increment,
livro varchar(40),
autor varchar(50),
genero varchar(10),
fkUsuarioPref int,
constraint fkUsuarioPref foreign key (fkUsuarioPref) references cadastro(idUsuario)) auto_increment = 200;

create table perguntas (
idPerguntas int primary key auto_increment,
qtdLivros int,
livroPais char(3),
promocoes char(3),
filme char(3),
fkUsuarioPerg int, 
constraint fkUsuarioPerg foreign key (fkUsuarioPerg) references cadastro(idUsuario)) auto_increment = 300; 

select * from cadastro;	
select * from livro_novo;
select * from preferencias;	
select * from perguntas;	

select nomeLivro from livro_novo where fkUsuario = 2 order by idLivroNovo desc limit 1 ;

select nomeLivro, dtInicio from livro_novo where fkUsuario = 2;

SELECT COUNT(idLivroNovo) AS qtd, MONTH(dtInicio) AS mes 
    FROM livro_novo 
    WHERE fkUsuario = 1 
    AND dtInicio BETWEEN '2023-01-01' AND '2023-12-31' 
    GROUP BY mes order by month(dtInicio);
    
    select dtInicio from livro_novo where fkUsuario = 1 order by idLivroNovo desc limit 1