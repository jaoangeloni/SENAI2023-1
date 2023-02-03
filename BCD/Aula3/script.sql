-- Ordens de seviço 1.0
DROP DATABASE IF EXISTS ordens_servico_1
CREATE DATABASE ordens_servico_1;
USE ordens_servico_1;
CREATE TABLE os(
    id INT NOT NULL AUTO_INCREMENT,
    funcionario VARCHAR(100) NOT NULL,
    descricao TEXT NOT NULL,
    data_abertura DATE NOT NULL,
    hora_abertura TIME NOT NULL,
    data_fim DATE,
    hora_fim DATE,
    PRIMARY KEY(id)
);
SHOW TABLES;
DESCRIBE os;

DROP DATABASE IF EXISTS ordens_servico_2
CREATE DATABASE ordens_servico_2;
USE ordens_servico_2;
CREATE TABLE funcionario(
    matricula INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    cargo VARCHAR(50) NOT NULL,
    descricao TEXT NOT NULL,
    PRIMARY KEY(matricula)
);

CREATE TABLE os(
    id INT NOT NULL AUTO_INCREMENT,
    func_abertura INT NOT NULL,
    func_executor INT NOT NULL,
    descricao TEXT NOT NULL,
    data_abertura DATE NOT NULL,
    hora_abertura TIME NOT NULL,
    data_fim DATE,
    hora_fim DATE,
    PRIMARY KEY(id),
    FOREIGN KEY(func_abertura) REFERENCES funcionario(matricula),
    FOREIGN KEY(func_executor) REFERENCES funcionario(matricula)
);