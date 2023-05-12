
INSERT INTO Pedidos(cliente_id, data, hora) VALUES
(98,DATE_SUB(curdate(),INTERVAL 10 DAY),"9:42:00");
INSERT INTO Itens_Pedido(pedido_id, pizza_id, quantidade, valor) VALUES
(27,28,2, (select valor from Pizzas where pizza_id = 28));
INSERT INTO Itens_Pedido(pedido_id, pizza_id, quantidade, valor) VALUES
(27,5,1, (select valor from Pizzas where pizza_id = 5));

SELECT sum(valor * quantidade) FROM itens_pedido WHERE pedido_id = 27;
UPDATE pedidos SET valoe = (SELECT sum(valor * quantidade) FROM itens_pedido WHERE pedido_id = 27;)

CREATE PROCEDURE atualizaValorPedido(id int)
    UPDATE pedidos 
    SET valor = (SELECT sum(valor * quantidade) FROM itens_pedido WHERE pedido_id = id)
    WHERE pedido_id = id;

INSERT INTO Pedidos(cliente_id, data, hora) VALUES
(91,DATE_SUB(curdate(),INTERVAL 10 DAY), NOW());
INSERT INTO Itens_Pedido(pedido_id, pizza_id, quantidade, valor) VALUES
(28,28,2, (select valor from Pizzas where pizza_id = 28));

CALL atualizaValorPedido(28);

CREATE PROCEDURE pedidoItem(cli_id int, pi_id int, qtd int)
    DELIMITER $
    BEGIN
        INSERT INTO Pedidos(cliente_id, data, hora) VALUES
        (cli_id,DATE_SUB(curdate(),INTERVAL 10 DAY), NOW());
        INSERT INTO Itens_Pedido(pedido_id, pizza_id, quantidade, valor) VALUES
        (pedido_id, pi_id ,qtd, (select valor from Pizzas where pizza_id = pi_id));
    END $

CALL atualizaValorPedido(28);