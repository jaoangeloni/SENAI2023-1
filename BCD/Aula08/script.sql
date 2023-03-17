DROP DATABASE IF EXISTS estacionamento;
CREATE DATABASE estacionamento CHARSET=UTF8 COLLATE utf8_general_ci;
USE estacionamento;
-- DDL
CREATE TABLE cliente(
    cpf VARCHAR(14) NOT NULL,
    nome VARCHAR(100) NOT NULL,
    logradouro VARCHAR(100) NOT NULL,
    numero VARCHAR(10),
    bairro VARCHAR(50),
    cidade VARCHAR(50),
    uf VARCHAR(2),
    cep VARCHAR(9),
    PRIMARY KEY(cpf)
);

CREATE TABLE telefone(
    cpf VARCHAR(14) NOT NULL,
    numero VARCHAR(15) NOT NULL,
    FOREIGN KEY (cpf) REFERENCES cliente(cpf)
);

CREATE TABLE veiculo(
    placa VARCHAR(8) NOT NULL,
    modelo VARCHAR(50) NOT NULL,
    marca VARCHAR(50) NOT NULL,
    cor VARCHAR(15) NOT NULL,
    PRIMARY KEY(placa)
);

CREATE TABLE vaga(
    id INT NOT NULL AUTO_INCREMENT,
    tipo VARCHAR(10) NOT NULL,
    descricao VARCHAR(50) NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE estacionamento(
    id INT NOT NULL AUTO_INCREMENT,
    placa VARCHAR(8) NOT NULL,
    cpf VARCHAR(14),
    id_vaga INT,
    entrada DATETIME NOT NULL,
    saida DATETIME,
    valor DECIMAL(10,2),
    PRIMARY KEY(id),
    FOREIGN KEY (placa) REFERENCES veiculo(placa) ON UPDATE CASCADE,
    FOREIGN KEY (cpf) REFERENCES cliente(cpf) ON DELETE SET NULL ON UPDATE CASCADE,
    FOREIGN KEY (id_vaga) REFERENCES vaga(id) ON DELETE SET NULL ON UPDATE CASCADE
);

-- DML - Importação por concatenação
INSERT INTO cliente(cpf,nome,logradouro,bairro,cidade,uf) VALUES
('701.815.694-77','Timóteo Matos','Rua Pedro Silva Martins','Jardim Brasil','Amparo','SP'),
('409.163.286-60','Xeila Martins da Silva','Av. 7 de setembro','Jardim Brasil','Americana','SP'),
('757.816.660-36','Yara Martins Júnior','Praça Ivone Souza','Centro','Pedreira','SP'),
('981.894.943-92','Luciana Silva','Rua Xailo Souza','Jardim Brasil','Jaguariúna','SP'),
('073.202.759-45','Bruna Júnior Silva','Praça Antônio Silva Sobrinho','Jardim São Paulo','Jaguariúna','SP'),
('629.680.888-74','Jaqueline de Souza Oliveira','Rua Pedro Martim','Parque das Flores','Campinas','SP'),
('893.076.453-37','Gilberto Júnior Teixeira','Av. Paulista','Jardim São Paulo','Americana','SP'),
('158.660.877-07','Timóteo Oliveira','Rua do Mel','Centro','Nova Odessa','SP'),
('962.178.727-06','Xeila Souza Júnior','Rua Valter Souza','Jardim São Paulo','Pedreira','SP'),
('597.955.221-91','Olga Martins','Av. 7 de setembro','Jardim Brasil','Pedreira','SP'),
('395.005.819-22','Luis Teixeira','Rua Brito de Souza','Jardim São Paulo','Jaguariúna','SP'),
('286.150.469-21','Pedro Filho','Praça Ivone Souza','Centro','Jaguariúna','SP'),
('891.575.889-70','Yara Filho Filho','Praça Antônio Silva Sobrinho','Parque das Flores','Nova Odessa','SP'),
('746.115.849-09','Gisele da Silva da Silva','Av. 7 de setembro','Centro','Campinas','SP'),
('900.206.435-78','Ursula Neto Alves','Rua das Flores','Parque das Flores','Amparo','SP'),
('191.921.293-07','Valter Souza Souza','Av. 7 de setembro','Parque das Flores','Nova Odessa','SP'),
('857.950.358-23','Ivone Filho','Praça dos Trabalhadores','Centro','Americana','SP'),
('860.466.368-17','Queila Neto','Rua das Flores','Centro','Amparo','SP'),
('037.679.092-00','Xailo Mattos Matos','Rua das Rosas','Centro','Jaguariúna','SP'),
('485.522.339-59','Carla Martim da Silva','Rua Pedro Martim','Jardim Brasil','Pedreira','SP'),
('288.667.376-58','Evandro Júnior','Av. Brasil','Parque das Flores','Amparo','SP'),
('330.594.014-03','Evandro Mattos','Rua do açúcar','Parque das Flores','Jaguariúna','SP'),
('842.022.641-69','Antônio Sobrinho Neto','Rua Valter Souza','Jardim Brasil','Campinas','SP'),
('938.014.315-09','Carla Teixeira','Av. Brasil','Centro','Americana','SP'),
('311.756.371-73','Gilberto da Silva Filho','Av. Paulista','Jardim Brasil','Americana','SP'),
('300.766.852-25','Yago Custódio','Av. Paulista','Jardim São Paulo','Pedreira','SP'),
('645.329.387-08','Brito Teixeira','Av. XV de Novembro','Jardim Brasil','Nova Odessa','SP'),
('570.776.506-93','Flávia Custódio Teixeira','Rua das Rosas','Jardim Brasil','Jaguariúna','SP'),
('763.952.560-84','Gisele Júnior Alves','Rua do Mel','Parque das Flores','Pedreira','SP'),
('162.262.067-48','João Martim de Souza','Av. Brasil','Jardim Brasil','Amparo','SP'),
('694.235.242-06','Jaqueline Teixeira','Av. Brasil','Jardim São Paulo','Pedreira','SP'),
('787.327.017-30','Tatiane Alves','Praça dos Trabalhadores','Parque das Flores','Pedreira','SP'),
('574.746.905-35','Hugo Oliveira','Rua das Flores','Parque das Flores','Campinas','SP'),
('618.874.220-05','Carla Souza Mattos','Rua do açúcar','Jardim São Paulo','Jaguariúna','SP'),
('782.603.942-86','Fábio Neto Silva','Rua do açúcar','Jardim São Paulo','Amparo','SP');

INSERT INTO telefone VALUES('701.815.694-77','19-89701-0016'),
('701.815.694-77','19-78456-5318'),
('409.163.286-60','19-50991-3548'),
('409.163.286-60','19-16253-8452'),
('757.816.660-36','19-45874-5968'),
('981.894.943-92','19-28648-5271'),
('981.894.943-92','19-26672-4185'),
('073.202.759-45','19-84122-0639'),
('629.680.888-74','19-28291-6501'),
('629.680.888-74','19-23494-6842'),
('893.076.453-37','19-46951-3418'),
('893.076.453-37','19-09537-6465'),
('158.660.877-07','19-24690-8674'),
('962.178.727-06','19-94079-7258'),
('597.955.221-91','19-23216-8260'),
('395.005.819-22','19-79315-4887'),
('395.005.819-22','19-28587-1095'),
('286.150.469-21','19-13412-6152'),
('891.575.889-70','19-82981-7263'),
('746.115.849-09','19-33407-0093'),
('900.206.435-78','19-86764-0889'),
('900.206.435-78','19-39919-7731'),
('191.921.293-07','19-12588-7461'),
('857.950.358-23','19-10324-0937'),
('857.950.358-23','19-44573-3988'),
('860.466.368-17','19-32444-1362'),
('860.466.368-17','19-08110-5774'),
('037.679.092-00','19-96751-8859'),
('037.679.092-00','19-39198-5856'),
('485.522.339-59','19-90594-5718'),
('485.522.339-59','19-76807-0938'),
('288.667.376-58','19-03869-4839'),
('288.667.376-58','19-58666-9650'),
('330.594.014-03','19-27738-5617'),
('330.594.014-03','19-54009-4224'),
('842.022.641-69','19-14211-9705'),
('938.014.315-09','19-18249-9515'),
('311.756.371-73','19-22684-1551'),
('311.756.371-73','19-78753-3832'),
('300.766.852-25','19-92915-9892'),
('645.329.387-08','19-79175-5657'),
('570.776.506-93','19-46525-2369'),
('570.776.506-93','19-27087-4317'),
('763.952.560-84','19-82511-7779'),
('162.262.067-48','19-60738-1866'),
('694.235.242-06','19-18754-3884'),
('787.327.017-30','19-41740-7966'),
('787.327.017-30','19-49906-7976'),
('574.746.905-35','19-73735-5913'),
('574.746.905-35','19-00292-9177'),
('618.874.220-05','19-98610-0734'),
('618.874.220-05','19-08925-7163'),
('782.603.942-86','19-86044-9337'),
('782.603.942-86','19-77597-2120');

INSERT INTO veiculo VALUES
('CDB-6550','Virago','Yamaha','Preto'),
('FBE-7782','YBR 125','Yamaha','Branco'),
('CAF-5415','CG 125','Honda','Preto'),
('LEJ-4B96','Faser','Yamaha','Vermelha'),
('FBD-1173','Biz','Honda','Preto'),
('ACH-6A95','CG Titan 150','Honda','Prata'),
('DLE-1A56','Ka','Ford','Branco'),
('CCI-5260','Fiesta','Ford','Prata'),
('LDD-1002','Voyage','Volkswagen','Preto'),
('KLA-7A63','Voyage','Volkswagen','Prata'),
('EEL-8147','Gol','Volkswagen','Branco'),
('BLB-5D66','Fiesta','Ford','Preto'),
('IJA-7733','Celta','Chevrolet','Preto'),
('KFA-3C03','Gol','Volkswagen','Preto'),
('EKA-3455','Gol','Volkswagen','Vermelho'),
('LLL-6246','Saveiro','Volkswagen','Prata'),
('KBK-5248','Celta','Chevrolet','Prata'),
('LIB-7295','Ka','Ford','Prata'),
('FLL-2392','Corsa','Chevrolet','Prata'),
('BKB-3810','Fiesta','Ford','Branco'),
('ELF-7B90','Celta','Chevrolet','Branco'),
('EJI-7E35','Voyage','Volkswagen','Branco'),
('EBI-3338','Fusion','Ford','Branco'),
('BHI-3F56','Kombi','Volkswagen','Prata'),
('JCF-7153','Kombi','Volkswagen','Branco'),
('ILC-2428','Polo','Volkswagen','Branco'),
('LCB-7951','Corsa','Chevrolet','Preto'),
('HCA-6132','Polo','Volkswagen','Preto'),
('LAE-4407','Fusion','Ford','Preto'),
('BFC-3C01','Corsa','Chevrolet','Branco'),
('JKF-6A99','Fusion','Ford','Prata');

INSERT INTO vaga VALUES
(1,'Moto','Vaga para moto',5.00),
(2,'Moto','Vaga para moto',5.00),
(3,'Moto','Vaga para moto',5.00),
(4,'Moto','Vaga para moto',5.00),
(5,'Moto','Vaga para moto',5.00),
(6,'Moto','Vaga para moto',5.00),
(7,'Moto','Vaga para moto',5.00),
(8,'Moto','Vaga para moto',5.00),
(9,'Carro','Vaga para carro',10.00),
(10,'Carro','Vaga para carro',10.00),
(11,'Carro','Vaga para carro',10.00),
(12,'Carro','Vaga para carro',10.00),
(13,'Carro','Vaga para carro',10.00),
(14,'Carro','Vaga para carro',10.00),
(15,'Carro','Vaga para carro',10.00),
(16,'Carro','Vaga para carro',10.00),
(17,'Carro','Vaga para carro',10.00),
(18,'Carro','Vaga para carro',10.00),
(19,'Carro','Vaga para carro',10.00),
(20,'Carro','Vaga para carro',10.00),
(21,'Carro','Vaga para carro',10.00);

INSERT INTO estacionamento VALUES
(1,'LLL-6246','860.466.368-17',10,'2022-02-24 10:11','2022-02-24 11:26',12.50),
(2,'KBK-5248','037.679.092-00',10,'2022-02-24 12:53','2022-02-24 15:53',17.50),
(3,'CAF-5415','757.816.660-36',3,'2022-02-24 08:31','2022-02-24 11:01',7.50),
(4,'KLA-7A63','286.150.469-21',21,'2022-02-24 09:35','2022-02-24 13:20',17.50),
(5,'EKA-3455','857.950.358-23',18,'2022-02-24 08:47','2022-02-24 10:32',12.50),
(6,'FLL-2392','288.667.376-58',14,'2022-02-25 12:20','2022-02-25 16:05',17.50),
(7,'LEJ-4B96','073.202.759-45',4,'2022-02-25 09:51','2022-02-25 12:06',7.50),
(8,'EBI-3338','300.766.852-25',12,'2022-02-25 08:17','2022-02-25 11:47',17.50),
(9,'KFA-3C03','191.921.293-07',16,'2022-02-25 10:40','2022-02-25 12:10',12.50),
(10,'FBE-7782','409.163.286-60',5,'2022-02-25 11:55','2022-02-25 14:10',7.50),
(11,'BLB-5D66','746.115.849-09',12,'2022-02-25 11:56','2022-02-25 16:26',20.00),
(12,'LIB-7295','485.522.339-59',10,'2022-02-25 12:00','2022-02-25 13:00',12.50),
(13,'EJI-7E35','311.756.371-73',12,'2022-02-25 10:22','2022-02-25 13:22',17.50),
(14,'CDB-6550','701.815.694-77',3,'2022-02-25 11:51','2022-02-25 15:21',8.75),
(15,'BHI-3F56','645.329.387-08',21,'2022-02-26 08:21','2022-02-26 10:21',15.00),
(16,'LAE-4407','787.327.017-30',17,'2022-02-26 09:23','2022-02-26 11:08',12.50),
(17,'DLE-1A56','962.178.727-06',9,'2022-02-26 11:45','2022-02-26 13:30',12.50),
(18,'CCI-5260','597.955.221-91',9,'2022-02-26 08:49','2022-02-26 12:49',20.00),
(19,'ELF-7B90','842.022.641-69',11,'2022-02-26 10:51','2022-02-26 14:36',17.50),
(20,'BKB-3810','330.594.014-03',11,'2022-02-26 12:11','2022-02-26 13:11',12.50),
(21,'IJA-7733','900.206.435-78',15,'2022-02-26 12:44','2022-02-26 16:14',17.50),
(22,'ACH-6A95','158.660.877-07',7,'2022-02-26 12:01','2022-02-26 16:01',10.00),
(23,'LDD-1002','395.005.819-22',9,'2022-02-26 12:40','2022-02-26 14:25',12.50),
(24,'BFC-3C01','618.874.220-05',18,'2022-02-26 08:58','2022-02-26 12:28',17.50),
(25,'ILC-2428','763.952.560-84',21,'2022-02-26 10:27','2022-02-26 11:27',12.50),
(26,'FBD-1173','893.076.453-37',8,'2022-02-26 12:38','2022-02-26 16:38',10.00),
(27,'HCA-6132','694.235.242-06',13,'2022-02-26 12:37','2022-02-26 17:07',20.00),
(28,'JCF-7153','570.776.506-93',20,'2022-02-27 10:17','2022-02-27 11:32',12.50),
(29,'LCB-7951','162.262.067-48',18,'2022-02-27 12:57','2022-02-27 15:57',17.50),
(30,'EEL-8147','891.575.889-70',20,'2022-02-27 10:43','2022-02-27 13:28',15.00),
(31,'JKF-6A99','782.603.942-86',21,'2022-02-27 11:59','2022-02-27 15:29',17.50),
(32,'BHI-3F56','574.746.905-35',14,'2022-02-27 11:40','2022-02-27 13:55',15.00),
(33,'CCI-5260','938.014.315-09',11,'2022-02-27 09:15','2022-02-27 12:00',15.00),
(34,'FBD-1173','629.680.888-74',7,'2022-02-27 11:05','2022-02-27 15:20',10.00),
(35,'FBE-7782','981.894.943-92',3,'2022-02-27 10:59','2022-02-27 14:14',8.75),
(36,'FLL-2392','288.667.376-58',10,'2022-02-27 10:58','2022-02-27 15:13',20.00),
(37,'LDD-1002','395.005.819-22',15,'2022-02-27 09:14','2022-02-27 12:29',17.50),
(38,'KLA-7A63','286.150.469-21',9,'2022-02-27 09:09','2022-02-27 12:54',17.50),
(39,'ILC-2428','763.952.560-84',21,'2022-02-27 11:30','2022-02-27 14:30',17.50),
(40,'CCI-5260','597.955.221-91',14,'2022-02-27 12:19','2022-02-27 14:19',15.00),
(41,'EEL-8147','891.575.889-70',9,'2022-02-27 12:58','2022-02-27 15:43',15.00),
(42,'EKA-3455','857.950.358-23',18,'2022-02-28 12:07','2022-02-28 15:22',17.50),
(43,'FBE-7782','981.894.943-92',3,'2022-02-28 09:19','2022-02-28 12:04',7.50),
(44,'JCF-7153','570.776.506-93',16,'2022-02-28 12:43','2022-02-28 15:28',15.00),
(45,'JCF-7153','570.776.506-93',14,'2022-02-28 11:15','2022-02-28 15:30',20.00),
(46,'HCA-6132','694.235.242-06',13,'2022-02-28 09:52','2022-02-28 13:22',17.50),
(47,'KFA-3C03','191.921.293-07',21,'2022-02-28 08:22','2022-02-28 09:37',12.50),
(48,'EKA-3455','857.950.358-23',17,'2022-02-28 11:25','2022-02-28 14:55',17.50),
(49,'ILC-2428','763.952.560-84',17,'2022-02-28 10:35','2022-02-28 12:20',12.50),
(50,'ELF-7B90','842.022.641-69',21,'2022-02-28 12:33','2022-02-28 13:48',12.50),
(51,'KLA-7A63','286.150.469-21',20,'2022-02-28 10:04','2022-02-28 11:49',12.50),
(52,'LDD-1002','395.005.819-22',14,'2022-02-28 08:38','2022-02-28 12:38',20.00),
(53,'BHI-3F56','645.329.387-08',16,'2022-02-28 10:16','2022-02-28 13:16',17.50),
(54,'FBE-7782','409.163.286-60',7,'2022-03-01 10:56','2022-03-01 13:11',7.50),
(55,'KBK-5248','037.679.092-00',12,'2022-03-01 12:18','2022-03-01 14:03',12.50),
(56,'IJA-7733','900.206.435-78',11,'2022-03-01 10:32','2022-03-01 14:02',17.50),
(57,'LAE-4407','787.327.017-30',13,'2022-03-01 11:51','2022-03-01 14:36',15.00),
(58,'BKB-3810','330.594.014-03',21,'2022-03-01 11:37','2022-03-01 16:07',20.00),
(59,'ILC-2428','763.952.560-84',21,'2022-03-01 10:58','2022-03-01 13:58',17.50),
(60,'CCI-5260','938.014.315-09',14,'2022-03-01 08:39','2022-03-01 12:24',17.50),
(61,'FBE-7782','981.894.943-92',7,'2022-03-01 08:30','2022-03-01 13:00',10.00),
(62,'BHI-3F56','574.746.905-35',13,'2022-03-01 11:33','2022-03-01 15:03',17.50),
(63,'FBE-7782','981.894.943-92',7,'2022-03-01 09:47','2022-03-01 12:02',7.50),
(64,'ACH-6A95','158.660.877-07',7,'2022-03-01 08:07','2022-03-01 12:37',10.00),
(65,'CCI-5260','597.955.221-91',16,'2022-03-01 11:56','2022-03-01 14:56',17.50),
(66,'LIB-7295','485.522.339-59',21,'2022-03-01 08:52','2022-03-01 10:52',15.00),
(67,'CCI-5260','597.955.221-91',10,'2022-03-01 11:11','2022-03-01 13:11',15.00),
(68,'EEL-8147','891.575.889-70',18,'2022-03-01 11:03','2022-03-01 13:33',15.00),
(69,'CCI-5260','597.955.221-91',14,'2022-03-01 09:01','2022-03-01 10:16',12.50),
(70,'KLA-7A63','286.150.469-21',20,'2022-03-01 08:26','2022-03-01 11:41',17.50),
(71,'BFC-3C01','618.874.220-05',16,'2022-03-01 10:34','2022-03-01 12:19',12.50),
(72,'LLL-6246','860.466.368-17',15,'2022-03-02 11:46','2022-03-02 13:46',15.00),
(73,'KFA-3C03','191.921.293-07',13,'2022-03-02 09:38','2022-03-02 13:53',20.00),
(74,'ILC-2428','763.952.560-84',19,'2022-03-02 10:33','2022-03-02 15:03',20.00),
(75,'EJI-7E35','311.756.371-73',11,'2022-03-02 10:48','2022-03-02 12:48',15.00),
(76,'HCA-6132','694.235.242-06',13,'2022-03-02 08:09','2022-03-02 10:39',15.00),
(77,'FBE-7782','409.163.286-60',9,'2022-03-02 11:02','2022-03-02 14:17',8.75),
(78,'JCF-7153','570.776.506-93',12,'2022-03-02 08:05','2022-03-02 11:35',17.50),
(79,'LIB-7295','485.522.339-59',17,'2022-03-03 09:53','2022-03-03 11:08',12.50),
(80,'EJI-7E35','311.756.371-73',12,'2022-03-03 08:54','2022-03-03 10:24',12.50),
(81,'LDD-1002','395.005.819-22',15,'2022-03-03 12:48','2022-03-03 14:33',12.50),
(82,'KBK-5248','037.679.092-00',19,'2022-03-03 10:17','2022-03-03 11:17',12.50),
(83,'LAE-4407','787.327.017-30',18,'2022-03-03 08:12','2022-03-03 10:57',15.00),
(84,'DLE-1A56','962.178.727-06',17,'2022-03-03 11:06','2022-03-03 12:51',12.50),
(85,'LEJ-4B96','073.202.759-45',3,'2022-03-03 10:40','2022-03-03 14:55',10.00),
(86,'EKA-3455','857.950.358-23',19,'2022-03-03 10:30','2022-03-03 13:15',15.00),
(87,'CAF-5415','757.816.660-36',9,'2022-03-03 09:39','2022-03-03 10:39',6.25),
(88,'ILC-2428','763.952.560-84',12,'2022-03-03 09:58','2022-03-03 14:28',20.00),
(89,'ELF-7B90','842.022.641-69',15,'2022-03-03 11:35','2022-03-03 15:50',20.00),
(90,'FBE-7782','409.163.286-60',2,'2022-03-04 10:56','2022-03-04 15:11',10.00),
(91,'HCA-6132','694.235.242-06',17,'2022-03-04 12:09','2022-03-04 13:09',12.50),
(92,'FBD-1173','629.680.888-74',8,'2022-03-04 09:38','2022-03-04 14:08',10.00),
(93,'HCA-6132','694.235.242-06',20,'2022-03-04 11:55','2022-03-04 15:55',20.00),
(94,'LIB-7295','485.522.339-59',21,'2022-03-04 11:09','2022-03-04 12:09',12.50),
(95,'DLE-1A56','962.178.727-06',14,'2022-03-04 10:53','2022-03-04 15:23',20.00),
(96,'ILC-2428','763.952.560-84',20,'2022-03-04 10:09','2022-03-04 12:54',15.00),
(97,'BLB-5D66','746.115.849-09',9,'2022-03-04 09:50','2022-03-04 11:50',15.00),
(98,'CCI-5260','938.014.315-09',14,'2022-03-04 08:14','2022-03-04 10:14',15.00),
(99,'EBI-3338','300.766.852-25',11,'2022-03-04 10:17','2022-03-04 14:17',20.00),
(100,'KFA-3C03','191.921.293-07',18,'2022-03-04 10:08','2022-03-04 12:08',15.00),
(101,'CCI-5260','938.014.315-09',12,'2022-03-04 09:11','2022-03-04 11:26',15.00),
(102,'LDD-1002','395.005.819-22',18,'2022-03-04 08:28','2022-03-04 09:43',12.50),
(103,'KLA-7A63','286.150.469-21',12,'2022-03-04 10:04','2022-03-04 13:19',17.50),
(104,'EJI-7E35','311.756.371-73',18,'2022-03-04 12:32','2022-03-04 14:47',15.00),
(105,'EBI-3338','300.766.852-25',21,'2022-03-04 11:13','2022-03-04 13:13',15.00),
(106,'FBD-1173','893.076.453-37',4,'2022-03-04 08:25','2022-03-04 11:55',8.75),
(107,'DLE-1A56','962.178.727-06',17,'2022-03-05 08:56','2022-03-05 09:56',12.50),
(108,'CCI-5260','597.955.221-91',11,'2022-03-05 11:41','2022-03-05 13:56',15.00),
(109,'LEJ-4B96','073.202.759-45',6,'2022-03-05 10:00','2022-03-05 12:15',7.50),
(110,'FBE-7782','981.894.943-92',5,'2022-03-05 08:14','2022-03-05 09:29',6.25),
(111,'BFC-3C01','618.874.220-05',14,'2022-03-05 11:18','2022-03-05 12:48',12.50),
(112,'EKA-3455','857.950.358-23',12,'2022-03-05 12:22','2022-03-05 14:07',12.50),
(113,'KLA-7A63','286.150.469-21',10,'2022-03-05 11:55','2022-03-05 13:40',12.50),
(114,'BLB-5D66','746.115.849-09',21,'2022-03-05 12:56','2022-03-05 15:11',15.00),
(115,'IJA-7733','900.206.435-78',9,'2022-03-05 09:05','2022-03-05 13:35',20.00),
(116,'FLL-2392','288.667.376-58',16,'2022-03-05 11:15','2022-03-05 15:30',20.00),
(117,'CCI-5260','597.955.221-91',16,'2022-03-05 10:50','2022-03-05 12:05',12.50),
(118,'BKB-3810','330.594.014-03',13,'2022-03-05 12:25','2022-03-05 15:40',17.50),
(119,'FBE-7782','981.894.943-92',5,'2022-03-05 11:30','2022-03-05 13:45',7.50),
(120,'LCB-7951','162.262.067-48',12,'2022-03-06 08:14','2022-03-06 11:29',17.50),
(121,'BLB-5D66','746.115.849-09',21,'2022-03-06 08:02','2022-03-06 12:32',20.00),
(122,'CCI-5260','597.955.221-91',18,'2022-03-06 12:43','2022-03-06 13:58',12.50),
(123,'LDD-1002','395.005.819-22',21,'2022-03-06 12:16','2022-03-06 14:16',15.00),
(124,'CCI-5260','597.955.221-91',21,'2022-03-06 08:08','2022-03-06 09:23',12.50),
(125,'IJA-7733','900.206.435-78',15,'2022-03-06 11:32','2022-03-06 16:02',20.00),
(126,'LEJ-4B96','073.202.759-45',5,'2022-03-06 12:28','2022-03-06 16:43',10.00),
(127,'CAF-5415','757.816.660-36',8,'2022-03-06 10:43','2022-03-06 12:28',6.25),
(128,'DLE-1A56','962.178.727-06',21,'2022-03-06 11:26','2022-03-06 12:56',12.50),
(129,'KFA-3C03','191.921.293-07',9,'2022-03-06 08:21','2022-03-06 12:21',20.00),
(130,'KLA-7A63','286.150.469-21',19,'2022-03-06 08:32','2022-03-06 10:32',15.00),
(131,'JCF-7153','570.776.506-93',21,'2022-03-06 09:48','2022-03-06 13:03',17.50),
(132,'CCI-5260','597.955.221-91',18,'2022-03-06 12:37','2022-03-06 14:37',15.00),
(133,'FBE-7782','409.163.286-60',8,'2022-03-06 08:48','2022-03-06 12:18',8.75),
(134,'CDB-6550','701.815.694-77',1,'2022-03-06 11:44','2022-03-06 16:14',10.00),
(135,'CDB-6550','701.815.694-77',9,'2022-03-06 12:16','2022-03-06 16:31',10.00),
(136,'JCF-7153','570.776.506-93',18,'2022-03-06 09:11','2022-03-06 13:26',20.00),
(137,'KBK-5248','037.679.092-00',15,'2022-03-06 09:35','2022-03-06 12:50',17.50),
(138,'BHI-3F56','645.329.387-08',11,'2022-03-07 12:06','2022-03-07 14:51',15.00),
(139,'DLE-1A56','962.178.727-06',15,'2022-03-07 12:40','2022-03-07 15:40',17.50),
(140,'ACH-6A95','158.660.877-07',9,'2022-03-07 11:50','2022-03-07 14:20',7.50),
(141,'HCA-6132','694.235.242-06',17,'2022-03-07 10:34','2022-03-07 14:04',17.50),
(142,'LDD-1002','395.005.819-22',9,'2022-03-07 08:24','2022-03-07 09:24',12.50),
(143,'CDB-6550','701.815.694-77',3,'2022-03-07 09:22','2022-03-07 13:07',8.75),
(144,'BKB-3810','330.594.014-03',12,'2022-03-07 11:43','2022-03-07 14:58',17.50),
(145,'KLA-7A63','286.150.469-21',17,'2022-03-07 08:27','2022-03-07 12:27',20.00),
(146,'EEL-8147','891.575.889-70',19,'2022-03-07 12:19','2022-03-07 16:49',20.00),
(147,'BFC-3C01','618.874.220-05',15,'2022-03-07 08:58','2022-03-07 11:13',15.00),
(148,'DLE-1A56','962.178.727-06',12,'2022-03-07 09:24','2022-03-07 11:24',15.00),
(149,'EBI-3338','300.766.852-25',19,'2022-03-07 12:52','2022-03-07 15:37',15.00),
(150,'BHI-3F56','645.329.387-08',21,'2022-03-07 12:59','2022-03-07 14:44',12.50),
(151,'EKA-3455','857.950.358-23',9,'2022-03-07 11:54','2022-03-07 16:24',20.00),
(152,'BFC-3C01','618.874.220-05',18,'2022-03-07 09:57','2022-03-07 14:12',20.00),
(153,'BHI-3F56','645.329.387-08',12,'2022-03-07 08:36','2022-03-07 13:06',20.00),
(154,'ILC-2428','763.952.560-84',18,'2022-03-07 10:16','2022-03-07 14:16',20.00),
(155,'CDB-6550','701.815.694-77',6,'2022-03-08 10:25','2022-03-08 14:55',10.00),
(156,'EEL-8147','891.575.889-70',19,'2022-03-08 08:01','2022-03-08 11:46',17.50),
(157,'BKB-3810','330.594.014-03',10,'2022-03-08 10:21','2022-03-08 13:21',17.50),
(158,'HCA-6132','694.235.242-06',15,'2022-03-08 10:52','2022-03-08 14:52',20.00),
(159,'FBD-1173','629.680.888-74',3,'2022-03-08 11:41','2022-03-08 13:41',7.50),
(160,'EBI-3338','300.766.852-25',21,'2022-03-08 12:10','2022-03-08 16:40',20.00),
(161,'JCF-7153','570.776.506-93',19,'2022-03-08 11:42','2022-03-08 13:42',15.00),
(162,'FLL-2392','288.667.376-58',16,'2022-03-08 10:25','2022-03-08 14:55',20.00),
(163,'ILC-2428','763.952.560-84',14,'2022-03-08 10:58','2022-03-08 12:43',12.50),
(164,'BLB-5D66','746.115.849-09',16,'2022-03-08 09:02','2022-03-08 12:32',17.50),
(165,'JKF-6A99','782.603.942-86',14,'2022-03-08 11:36','2022-03-08 13:36',15.00),
(166,'JKF-6A99','782.603.942-86',17,'2022-03-08 08:06','2022-03-08 11:51',17.50),
(167,'LIB-7295','485.522.339-59',21,'2022-03-08 10:12','2022-03-08 13:12',17.50),
(168,'BFC-3C01','618.874.220-05',14,'2022-03-08 12:06','2022-03-08 16:36',20.00);

-- Criando visões
CREATE VIEW vw_cliente AS
SELECT c.cpf, c.nome, c.logradouro, c.numero, c.bairro, c.cidade, c.uf, c.cep, t.numero as telefone
FROM cliente c LEFT JOIN telefone t ON c.cpf = t.cpf; 

SELECT * FROM vw_cliente;
SELECT * FROM veiculo;
SELECT * FROM vaga;
SELECT * FROM estacionamento;

UPDATE estacionamento SET saida="2022-03-08 18:00:00" WHERE id=168;

CREATE VIEW vw_esacionamento AS
	SELECT * FROM estacionamento
		RIGHT JOIN 


-- Executar o script de dentro do banco de dados
-- source D:/wellington/senai2023/2des/03-bcd/aula08/solucao/estacionamento_importa_concatenacao.sql