DROP DATABASE IF EXISTS escola;
CREATE DATABASE escola CHARSET=UTF8 COLLATE utf8_general_ci;
USE escola;

CREATE TABLE professores(
    id INT not null PRIMARY KEY, 
    nome varchar(100) not null,
    especialização varchar(50) not null
);

CREATE TABLE alunos(
    ra varchar(15) not null PRIMARY KEY,
    nome varchar(50) not null,
    nascto date not null
);

CREATE TABLE turmas(
    id INT not null PRIMARY KEY,
    nome varchar(50) not null,
    sigla varchar(4) not null
);

SHOW tables;
DESCRIBE professores;
DESCRIBE alunos;
DESCRIBE turmas;