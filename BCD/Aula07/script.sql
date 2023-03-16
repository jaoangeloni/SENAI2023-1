DROP DATABASE IF EXISTS oficina;
CREATE DATABASE oficina;
USE oficina;

CREATE TABLE funcionarios(
    matricula VARCHAR(5) NOT NULL PRIMARY KEY,
    funcionario VARCHAR(20) NOT NULL,
    telefone VARCHAR(50) NOT NULL
);

CREATE TABLE carros(
    placa VARCHAR(10) NOT NULL PRIMARY KEY,
    modelo VARCHAR(10) NOT NULL,
    marca VARCHAR(10) NOT NULL,
    ano INT NOT NULL
);

CREATE TABLE manutencao(
    matricula VARCHAR(5) NOT NULL,
    placa VARCHAR(10) NOT NULL,
    id_manutencao INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    inicio_manutencao DATE NOT NULL,
    fim_manutencao DATE NOT NULL,
    descricao VARCHAR(50) NOT NULL,
    FOREIGN KEY (matricula) REFERENCES funcionarios(matricula),
    FOREIGN KEY (placa) REFERENCES carros(placa)
);


LOAD DATA INFILE 'D:/JoaoPedroAngeloniAlvarenga/SENAI2023/BCD/Aula07/funcionarios.CSV'
INTO TABLE funcionarios
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/JoaoPedroAngeloniAlvarenga/SENAI2023/BCD/Aula07/carro.CSV'
INTO TABLE carros
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/JoaoPedroAngeloniAlvarenga/SENAI2023/BCD/Aula07/manutencao.CSV'
INTO TABLE manutencao
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;