USE pizzaria;
SHOW tables;

SELECT * FROM clientes;

SELECT * FROM pizzas;

SELECT * FROM pizzas;
SELECT * FROM pedidos;
SELECT * FROM itens_pedido;
SELECT * FROM itens_pedido WHERE pedido_id = 3;
SELECT count(quantidade) FROM itens_pedido WHERE pedido_id = 3;
SELECT sum(quantidade) FROM itens_pedido WHERE pedido_id = 3;

DESCRIBE pedidos;
DESCRIBE clientes;
SELECT * FROM pedidos WHERE pedido_id = 3;
SELECT * FROM clientes WHERE cliente_id = 2;

SELECT c.nome FROM pedidos p INNER JOIN clientes c
ON c.cliente_id = p.cliente_id
WHERE p.pedido_id = 3;

SELECT * FROM itens_pedido WHERE pedido_id = 3;
SELECT pizza_id FROM itens_pedido WHERE pedido_id = 3;
SELECT * FROM pizzas WHERE pizza_id IN (7,5,8,9,3,10,16);

SELECT * FROM pizzas WHERE pizza_id
    IN (SELECT pizza_id FROM itens_pedido WHERE pedido_id = 3);
SELECT nome FROM pizzas WHERE pizza_id
    IN (SELECT pizza_id FROM itens_pedido WHERE pedido_id = 3);

SELECT p.nome FROM itens_pedido i INNER JOIN pizzas p
ON i.pizza_id = p.pizza_id
WHERE i.pedido_id = 3;

SELECT i.*, p.nome FROM itens_pedido i INNER JOIN pizzas p
ON i.pizza_id = p.pizza_id
WHERE i.pedido_id = 3;