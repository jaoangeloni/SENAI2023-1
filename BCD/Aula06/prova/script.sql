DROP DATABASE IF EXISTS estacionamento;
CREATE DATABASE estacionamento;
USE estacionamento;

CREATE TABLE cliente(
    cpf VARCHAR(15) NOT NULL PRIMARY KEY,
    nome_cliente VARCHAR(50) NOT NULL,
    endereco VARCHAR(50) NOT NULL,
    telefones VARCHAR(10) NOT NULL
);

CREATE TABLE estacionamento(
    cpf_cliente VARCHAR(15) NOT NULL,
    id_estacionamento INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    FOREIGN KEY (cpf_cliente) REFERENCES cliente(cpf)
);

CREATE TABLE carro(
    cpf_cliente VARCHAR(15) NOT NULL,
    placa VARCHAR(10) NOT NULL,
    modelo VARCHAR(20) NOT NULL,
    marca VARCHAR(20) NOT NULL,
    cor VARCHAR(20) NOT NULL,
    FOREIGN KEY (cpf_cliente) REFERENCES cliente(cpf)
);

CREATE TABLE vaga(
    cpf_cliente VARCHAR(15) NOT NULL,
    id_vaga INT NOT NULL,
    tipo_vaga VARCHAR(10) NOT NULL,
    descricao_vaga VARCHAR(20) NOT NULL,
    valor_vaga FLOAT(4,2) NOT NULL,
    FOREIGN KEY (cpf_cliente) REFERENCES cliente(cpf)
);

CREATE TABLE estaciona(
    cpf_cliente VARCHAR(15) NOT NULL,
    id_estacionamento INT NOT NULL,
    entrada VARCHAR(25) NOT NULL,
    saida VARCHAR(25) NOT NULL,
    valor_estacionamento FLOAT(4,2) NOT NULL,
    FOREIGN KEY (cpf_cliente) REFERENCES cliente(cpf),
    FOREIGN KEY (id_estacionamento) REFERENCES estacionamento(id_estacionamento)
);

LOAD DATA INFILE 'D:/prova_bcd/CSV/cliente.csv'
INTO TABLE cliente
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/prova_bcd/CSV/estacionamento.csv'
INTO TABLE estacionamento
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/prova_bcd/CSV/carro.csv'
INTO TABLE carro
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/prova_bcd/CSV/vaga.csv'
INTO TABLE vaga
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/prova_bcd/CSV/estaciona.csv'
INTO TABLE estaciona
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;