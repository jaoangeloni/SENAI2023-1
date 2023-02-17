DROP DATABASE IF EXISTS escola;
CREATE DATABASE escola CHARSET=UTF8 COLLATE utf8_general_ci;
USE escola;

CREATE TABLE professores(
    id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    nome varchar(100) not null,
    especialidade varchar(50) not null
);

CREATE TABLE aluno(
    ra varchar(15) not null PRIMARY KEY,
    nome varchar(50) not null,
    nascto date not null,
    id_turma INTEGER NOT NULL
);

CREATE TABLE turmas(
    id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome varchar(50) not null,
    sigla varchar(4) not null
);

ALTER TABLE aluno ADD FOREIGN KEY (id_turma) REFERENCES turmas(id);

CREATE TABLE leciona(
    id_prof INTEGER NOT NULL,
    id_turma INTEGER NOT NULL,
    FOREIGN KEY (id_prof) REFERENCES professores(id)
    ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (id_turma) REFERENCES turmas(id)
    ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO professores VALUES
(default, "Reenye", "Mobile"),
(default, "Wellington", "Banco de Dados"),
(default, "Ivo", "Matemática");

INSERT INTO turmas VALUES
(default, "Desenvolvimento de Sistemas", "2DES"),
(default, "Desenvolvimento de Sistemas", "3DES"),
(default, "Eletrônica", "1EA"),
(default, "Eletrônica", "3EA");

INSERT INTO aluno VALUES
('ra01', "Camacho", "2000-04-02", 1),
('ra02', "Karen", "2005-05-12", 1),
('ra03', "Cyro", "1984-08-13", 2),
('ra04', "Beatriz", "2002-08-05",2),
('ra05', "Alexandre", "2001-12-12",3),
('ra06', "Alexandre", "2001-12-12",3);

INSERT INTO leciona VALUES
(1,1),
(1,2),
(2,1),
(2,2),
(3,3);