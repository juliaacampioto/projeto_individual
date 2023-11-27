create database ProjetoIndividual;

use ProjetoIndividual;

create table cadastro(
idCadastro int primary key auto_increment,
nome varchar(30) not null,
sobrenome varchar(50) not null,
email varchar(50) unique not null, 
senha varchar(20) not null);

create table livro_novo(
idLivroNovo int primary key auto_increment,
nome varchar(30),
genero varchar(10),
autor varchar(50),
dtInicio varchar(10),
fkCadastro int, 
constraint fkCadastro foreign key (fkCadastro) references cadastro (idCadastro)) auto_increment = 100;

create table preferencias (
idPreferencias int primary key auto_increment,
livro varchar(40),
autor varchar(50),
genero varchar(10),
fkCadastroPref int,
constraint fkCadastroPref foreign key (fkCadastroPref) references cadastro(idCadastro)) auto_increment = 200;

create table perguntas (
idPerguntas int primary key auto_increment,
qtdLivros int,
livroPais char(3),
promocoes char(3),
filme char(3),
fkCadastroPerg int, 
constraint fkCadastroPerg foreign key (fkCadastroPerg) references cadastro(idCadastro)) auto_increment = 300; 

select * from cadastro;	
select * from livro_novo;
select * from preferencias;	
select * from perguntas;	