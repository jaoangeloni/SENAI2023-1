DROP DATABASE IF EXISTS bonificacao;
CREATE DATABASE bonificacao;
USE bonificacao;

CREATE TABLE funcionarios(
    matricula INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome_completo VARCHAR(100) NOT NULL,
    data_admissao DATE NOT NULL,
    salario DECIMAL(6,2) NOT NULL,
    data_pagto DATE NOT NULL,
    desempenho DECIMAL (3,1) NOT NULL,
    bonificacao DECIMAL (6,1) NULL
);
