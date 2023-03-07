DROP DATABASE IF EXISTS imobiliaria;
CREATE DATABASE imobiliaria; 
USE imobiliaria;

CREATE TABLE corretores(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    matricula VARCHAR(10) NOT NULL UNIQUE,
    senha VARCHAR(10) NOT NULL,
    salario FLOAT(6,2) NOT NULL
);

CREATE TABLE status(
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(20)
);

CREATE TABLE imoveis(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    corretor_id INT NOT NULL,
    codigo VARCHAR(10) NOT NULL UNIQUE,
    endereco VARCHAR(153) NOT NULL,
    valor_venda FLOAT(10,2),
    valor_aluguel FLOAT(10,2),
    status_id INT NOT NULL,
    FOREIGN KEY (corretor_id) REFERENCES corretores(id),
    FOREIGN KEY (status_id) REFERENCES status(id)
);

INSERT INTO corretores VALUES
("","Ze das Venda", "15948", "abc@123", 2500),
("","Joao dos Aluguel", "1323", "cba@321", 2500);

INSERT INTO status VALUES
("","Disponível"),
("","Alugado"),
("","Vendido");

INSERT INTO imoveis VALUES 
("", 1, "KSA7894", "Rua das ruas, 8", 400000, 850, 1),
("", 1, "APE1234", "Rua dos buero, 8, AP 41", 250000, 500, 1),
("", 2, "KSA5123", "Rua das avenidas, 35", 1250000, 5500, 3);