SELECT * FROM pedidos;
SELECT p.*, c.nome  FROM pedidos p INNER JOIN clientes c
ON p.cliente_id = c.cliente_id;

CREATE VIEW vw_pedidos1 AS
SELECT p.*, c.nome  FROM pedidos p INNER JOIN clientes c
ON p.cliente_id = c.cliente_id;

SELECT * FROM vw_pedidos1;
