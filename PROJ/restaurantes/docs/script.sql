DROP DATABASE IF EXISTS restaurantes;
CREATE DATABASE restaurantes;
USE restaurantes;

CREATE TABLE clientes(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    telefone VARCHAR(11) NOT NULL,
    email VARCHAR(50) NOT NULL,
    senha VARCHAR(50) NOT NULL
);
CREATE TABLE categorias(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL
);
CREATE TABLE restaurantes(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    categoriaId INT NOT NULL,
    endereco VARCHAR(50) NOT NULL,
    FOREIGN KEY (categoriaId) REFERENCES categorias(id)
);
CREATE TABLE cardapio(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    restauranteId INT NOT NULL,
    descricao VARCHAR(50) NOT NULL,
    valor DECIMAL(5,2) NOT NULL,
    FOREIGN KEY (restauranteId) REFERENCES restaurantes(id)
);
CREATE TABLE avaliacao(
    restauranteId INT NOT NULL,
    clienteId INT NOT NULL,
    data DATE NOT NULL,
    nota INT NOT NULL,
    descricao VARCHAR(50) NOT NULL,
    FOREIGN KEY (restauranteId) REFERENCES restaurantes(id),
    FOREIGN KEY (clienteId) REFERENCES clientes(id)
);

INSERT INTO categorias VALUES
("","Japonesa"),
("","Chinesa"),
("","Hambúrguer"),
("","Marmita");

INSERT INTO restaurantes VALUES
("","LARICA DE JAPA", 1, "Rua Yakuza,661"),
("","LARICA DOS CHINA", 2, "Rua Xangai, 42"),
("","CARNIFICINA", 3, "Rua dos boi, 23"),
("","MARMITONA DE CRIA", 4 , "Centro, 52");

INSERT INTO cardapio VALUES
("", 1, "SUSHI MATA FOME", 29.99),
("", 2, "PASTEL DE CARNE SUSPEITA", 5.99),
("", 3, "HAMBURGUER DE POMBA", 29.99),
("", 4, "MARMITA COMPLETA", 10.99);