create database ProjetoIndividual;

use ProjetoIndividual;

create table cadastro(
idCadastro int primary key auto_increment,
nome varchar(30),
sobrenome varchar(50),
email varchar(50), 
senha char(6));

select * from cadastro;

create table login (
idLogin int primary key auto_increment, 
email varchar(50),
senha char(6),
fkCadastro int, 
constraint fkCadastro foreign key (fkCadastro) references cadastro (idCadastro)) auto_increment = 100;