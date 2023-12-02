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

select * from cadastro;	
select * from livro_novo;
select * from preferencias;	

select count(idLivroNovo) as qtdLivros from livro_novo inner join cadastro on fkUsuario = idUsuario where idUsuario = 1;

select count(idLivroNovo) as qtd, month(dtInicio) as mes from livro_novo
where fkUsuario = 1 and dtInicio between '2023-01-01' and '2023-12-31' 
group by mes order by month(dtInicio);

select nomeLivro from livro_novo where fkUsuario = 1 order by idLivroNovo desc limit 1;
select dtInicio from livro_novo where fkUsuario = 1 order by idLivroNovo desc limit 1;

 select  nomeLivro, autor from livro_novo where fkUsuario = 1;

select livro from preferencias where fkUsuarioPref = 1;	
select autor from preferencias where fkUsuarioPref = 1;	