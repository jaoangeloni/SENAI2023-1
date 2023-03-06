DROP DATABASE IF EXISTS pizzaria;
CREATE DATABASE pizzaria;
USE pizzaria;

CREATE TABLE cliente(
    cliente_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    telefone VARCHAR(15) NOT NULL,
    nome VARCHAR(50) NOT NULL,
    logradouro VARCHAR(30) NOT NULL,
    numero DECIMAL(5,0) NOT NULL,
    complemento VARCHAR(30),
    bairro VARCHAR(30) NOT NULL,
    referencia VARCHAR(30)
);

CREATE TABLE pedido(
    pedido_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    cliente_id INT NOT NULL,
    data DATETIME NOT NULL,
    valor DECIMAL(5,2),
    FOREIGN KEY (cliente_id) REFERENCES cliente(cliente_id)
);

CREATE TABLE pizza(
    pizza_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL,
    descricao VARCHAR(30) NOT NULL,
    valor DECIMAL(4,2)
);

CREATE TABLE item_pedido(
    pizza_id INT NOT NULL,
    pedido_id INT NOT NULL,
    quantidade DECIMAL(2,0),
    valor DECIMAL(5,2),
    FOREIGN KEY (pedido_id) REFERENCES pedido(pedido_id),
    FOREIGN KEY (pizza_id) REFERENCES pizza(pizza_id)
);


