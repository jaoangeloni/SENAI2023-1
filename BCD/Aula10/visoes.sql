SELECT * FROM pedidos;
SELECT p.*, c.nome  FROM pedidos p INNER JOIN clientes c
ON p.cliente_id = c.cliente_id;

CREATE VIEW vw_pedidos1 AS
SELECT p.*, c.nome  FROM pedidos p INNER JOIN clientes c
ON p.cliente_id = c.cliente_id;

SELECT * FROM vw_pedidos1;

CREATE VIEW vw_pedidos AS
SELECT p.*, i.pizza_id, i.quantidade, i.valor AS preco, c.nome, pi.nome AS pizza FROM pedidos p
INNER JOIN itens_pedido i 
ON p.pedido_id = i.pedido_id
LEFT JOIN clientes c
ON p.cliente_id = c.cliente_id
LEFT JOIN pizzas pi
ON i.pizza_id = pi.pizza_id;

CREATE VIEW vw_pedidos2 AS
SELECT p.*, i.pizza_id, i.quantidade, i.valor AS preco, c.nome, pi.nome AS pizza, (i.quantidade * i.valor) AS subtotal  FROM pedidos p
INNER JOIN itens_pedido i 
ON p.pedido_id = i.pedido_id
LEFT JOIN clientes c
ON p.cliente_id = c.cliente_id
LEFT JOIN pizzas pi
ON i.pizza_id = pi.pizza_id;

DROP VIEW IF EXISTS vw_pedidos3;
CREATE VIEW vw_pedidos3 AS
SELECT p.*, i.pizza_id, i.quantidade, i.valor AS preco, c.nome, pi.nome AS pizza, SUM(i.quantidade * i.valor) AS total  FROM pedidos p
INNER JOIN itens_pedido i 
ON p.pedido_id = i.pedido_id
LEFT JOIN clientes c
ON p.cliente_id = c.cliente_id
LEFT JOIN pizzas pi
ON i.pizza_id = pi.pizza_id
GROUP BY p.pedido_id;

DROP VIEW IF EXISTS vw_pedidos4;
CREATE VIEW vw_pedidos4 AS
SELECT p.*, i.pizza_id, SUM(i.quantidade) as quantidade, i.valor AS preco, c.nome, pi.nome AS pizza, SUM(i.quantidade * i.valor) AS total  FROM pedidos p
INNER JOIN itens_pedido i 
ON p.pedido_id = i.pedido_id
LEFT JOIN clientes c
ON p.cliente_id = c.cliente_id
LEFT JOIN pizzas pi
ON i.pizza_id = pi.pizza_id
GROUP BY p.pedido_id;