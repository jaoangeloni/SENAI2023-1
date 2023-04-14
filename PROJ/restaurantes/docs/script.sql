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
("","Pizzas"),
("","Lanches"),
("","Japa"),
("","Marmita");

INSERT INTO restaurantes VALUES
("","Pizzaria Terra Nostra", 1, "Rua Yakuza, 661"),
("","Pizzaria Latitude", 1, "Rua Yakuza, 660"),
("","Gauchos Burger", 2, "Rua Xangai, 42"),
("","Mc'Donalds", 2, "Rua Xangai, 41"),
("","Ryoshi", 3, "Rua dos boi, 23"),
("","Japones", 3, "Rua dos boi, 22"),
("","Gauchos Marmita", 4 , "Centro, 52"),
("","Restaurante da Fran", 4 , "Centro, 51");

INSERT INTO cardapio VALUES
("", 1, "Pizza Gigantesca", 29.99),
("", 1, "Pizza Peqenininha", 19.99),
("", 2, "Pizza Gigantesca", 29.99),
("", 2, "Pizza Peqenininha", 19.99),
("", 3, "Lanche Gigantesco", 35.99),
("", 3, "Lanche Pequeninin", 15.99),
("", 4, "Lanche Gigantesco", 35.99),
("", 4, "Lanche Pequeninin", 15.99),
("", 5, "Temaki", 15.99),
("", 5, "Sashimi", 15.99),
("", 6, "Temaki", 15.99),
("", 6, "Sashimi", 15.99),
("", 7, "Marmita Pedreiro", 15.99),
("", 7, "Marmita Criança", 10.99),
("", 8, "Marmita Pedreiro", 15.99),
("", 8, "Marmita Criança", 10.99);      