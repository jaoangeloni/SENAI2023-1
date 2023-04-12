const { query } = require("express");
const con = require("../DAO/connect");

const avaliar = (req, res) => {
    const { restauranteId, clienteId, data, nota, descricao } = req.body;

    let query = `INSERT INTO avaliacao
                 VALUES (${restauranteId}, ${clienteId}, '${data}', ${nota}, '${descricao}')`;

    con.query(query, (err, response) => {
        console.log(err, response);
        if(err == undefined) {
            res.status(201).json(response).end();
        }else {
            let { sqlMessage, sqlState } = err;
            res.status(400).json({ sqlMessage, sqlState }).end();
        }
    });
}

const listar = (req, res) => {
    let query = "SELECT * FROM avaliacao";

    con.query(query, (err, response) => {
        if(err == undefined) {
            res.status(200).json(response).end();
        }else {
            res.status(400).json(err).end();
        }
    })
}


module.exports = {
    avaliar,
    listar
}
