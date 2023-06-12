DROP DATABASE IF EXISTS login;
CREATE DATABASE login;
USE login;

CREATE TABLE usuario(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(80) NOT NULL,
    email VARCHAR(80) NOT NULL,
    senha VARCHAR(80) NOT NULL,
    nascimento DATE NOT NULL,
    cpf VARCHAR(11) NOT NULL,
    endereco VARCHAR(100) NOT NULL,
    telefone VARCHAR(100) NOT NULL
);

INSERT INTO usuario VALUES
("","Joao Angeloni", "joao@gmail.com", password("joao123"), "2005-03-16", "44741604870", "Rua das ruas, 51", "19997962255, 19997963366");