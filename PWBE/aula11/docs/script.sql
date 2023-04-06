DROP DATABASE IF EXISTS clinica;
CREATE DATABASE clinica;
USE clinica;

CREATE TABLE pacientes(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    nascimento DATE NOT NULL,
    peso DECIMAL(5,2) NOT NULL,
    altura DECIMAL(3,2) NOT NULL,
    idade INT,
    imc INT,
    diagnostico VARCHAR(20)
);

INSERT INTO pacientes VALUES
("", "Jair Rodrigues", "1981-01-03", 85.5, 1.75, "", "", ""),
("", "Marieta Severo", "1995-03-04", 44.3, 1.55, "", "", ""),
("", "Karina Silva", "2002-05-13", 88, 1.73, "", "", ""),
("", "Solange Nascimento", "2005-12-01",95, 1.58, "", "", ""),
("", "Marcos Pontes", "2001-12-03", 60, 1.98, "", "", "");

-- CREATE VIEW [teste] AS
-- SELECT id, nome, nascimento, peso, altura, idade, imc, diagnostico
-- FROM Products
-- WHERE Price > (SELECT AVG(Price) FROM Products);