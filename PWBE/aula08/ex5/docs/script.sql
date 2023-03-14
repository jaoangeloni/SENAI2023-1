DROP DATABASE IF EXISTS tarefas;
CREATE DATABASE tarefas;
USE tarefas;

CREATE TABLE tarefas (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tarefa VARCHAR(100)
);

INSERT INTO tarefas VALUES
(default, "regar as plantas"),
(default, "ir ao mercado");